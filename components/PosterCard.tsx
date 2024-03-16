"use client"

import { MoviePosterType, MovieDetailsType, PosterCardType } from '@/library/modals';
import Image from 'next/image';
import { imageUrl } from '@/library/url';
import { useState, useRef, useEffect } from 'react';
import { Card } from "@/components/ui/card"
import Link from 'next/link';
import Eye from './icons/Eye';
import Heart from './icons/Heart';
import { useToast } from './ui/use-toast';
import Ellipsis from './icons/Ellipsis';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuLabel } from './ui/dropdown-menu';
import DefaultPoster from './DefaultPoster';
import { useSession } from 'next-auth/react';
import { postData, postFetchApi } from '@/library/db';
import { watch } from 'fs';
import { KeyedMutator } from 'swr';
import { useAccountInfoContext } from '@/provider/AccountInfoProvider';
import { removeFromList, addToList } from '@/library/crud';

type PosterProps = {
    details: MovieDetailsType 
    className?: string
    width: number
    height: number;
    sizes?: string;
    pointerEvent?: boolean
    mutate?: any
}

const PosterCard = ({ details, className, width, height, sizes, pointerEvent = true, mutate }: PosterProps) => {
    const session = useSession()
    const { toast } = useToast()
    const {watchlist, setWatchlist, favorites, setFavorites} = useAccountInfoContext()
    const [isLoading, setIsLoading] = useState(true)
    const [showHover, setShowHover] = useState(false)
    const [inWatchlist, setInWatchlist] = useState(false)
    const [inFavorite, setInfavorite] = useState(false)
    const ellipsisRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (session.status === 'authenticated' && watchlist && favorites) {
            setInWatchlist(watchlist?.some((movie) => movie.id === details.id));
            setInfavorite(favorites?.some((movie) => movie.id === details.id))
        }
    },[session.status, watchlist, details.id, favorites])

    const handleMouseEnter = () => {
        setShowHover(true)
    }

    const handleMouseLeave = () => {
        if (ellipsisRef?.current) {
            setShowHover(true)
        } else {
            setShowHover(false)

        }
    }


    const handleWatchlistIcon = async () => {
        if (session.status === "authenticated") {
            if (inWatchlist) {
                const request = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/watchlist/${session.data.user.id}/${session.data.user.sessionId}/${details.id}`, {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                if (request.status === 200) {
                    // setInWatchlist(!inWatchlist)
                    if(watchlist) {
                        setWatchlist(removeFromList(watchlist, details.id))
                        setInWatchlist(false)

                    }
                    // mutate()
                    toast({ description: `Removed '${details.title}' in your watchlist.` })
                }
            } else {
                const request = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/watchlist/${session.data.user.id}/${session.data.user.sessionId}/${details.id}`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                if (request.status === 200) {
                    if (watchlist !== undefined && watchlist !== null) {
                        setWatchlist(addToList(watchlist, details))
                        setInWatchlist(true)
                    }
                    // setInWatchlist(!inWatchlist)
                    toast({ description: `Added '${details.title}' to your watchlist.` })
                }
            }
            

        } else {
            toast({
                title: "Log in Required",
                variant: "destructive",
                description: 'You must be logged in to add films to the your watchlist.'
            })
        }
    }

    const handleFavoriteIcon = async () => {
        if (session.status === "authenticated") {
            if (inFavorite) {
                const request = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/favorites/${session.data.user.id}/${session.data.user.sessionId}/${details.id}`, {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                if (request.status === 200) {
                    
                    if(favorites) {
                        setFavorites(removeFromList(favorites, details.id))
                        setInfavorite(false)

                    }
                    // mutate()
                    toast({ description: `Removed '${details.title}' in your favorites.` })
                }
            } else {
                const request = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/favorites/${session.data.user.id}/${session.data.user.sessionId}/${details.id}`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                if (request.status === 200) {
                    if (favorites !== undefined && favorites !== null) {
                        setFavorites(addToList(favorites, details))
                        setInfavorite(true)
                    }
                    
                    toast({ description: `Added '${details.title}' to your favorites.` })
                }
            }
        } else {
            toast({
                title: "Log in Required",
                variant: "destructive",
                description: 'You must be logged in to add films to the your favorite list.'
            })
        }
    }


    // useEffect(() => {
    //     console.log(inWatchlist)
    // })

    return (
        <DropdownMenu>
            <div className='relative'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Link href={`/movie/details/${details.id}`} className={pointerEvent ? `` : `pointer-events-none`}>
                    {details.poster_path === null ? <DefaultPoster movieTitle={`${details.title}`} /> :
                        <Image

                            src={`${imageUrl}${details.poster_path}`}
                            alt={`${details.id}`}
                            width={width}
                            height={height}
                            sizes={sizes}
                            className=
                            {`w-full h-auto border-white transition-all rounded-md 
                        shadow-2xl hover:border-slate-500 duration-300 cursor-pointer 
                        ${className} 
                        ${showHover ? 'opacity-50' : ''}
                        ${isLoading ? " blur-lg " : " blur-0 "}`}
                            onLoad={() => setIsLoading(false)}
                            priority
                            quality={50}


                        />}
                </Link>
                {showHover && (
                    <>
                        <Card className='absolute bottom-3 inset-x-3 transition-opacity duration-700 z-10'>
                        
                            <div className='flex justify-center gap-3'>
                                {/* <form action={handleWatchlistIcon}> */}
                                    {/* <Eyes onClick={handleWatchlistIcon}/> */}
                                   <div onClick={handleWatchlistIcon} className='hover:cursor-pointer'>
                                    {inWatchlist ? <Eye watched={true}/> : <Eye/> }
                                    </div> 
                                {/* </form> */}
                                <div onClick={handleFavoriteIcon} className='hover:cursor-pointer'>
                                    {inFavorite ? <Heart watched={true}/>: <Heart/>}
                                </div>
                                {/* <Heart onClick={handleLikeIcon} /> */}
                                <DropdownMenuTrigger >
                                    <Ellipsis />
                                </DropdownMenuTrigger>
                            </div>
                            <DropdownMenuContent ref={ellipsisRef}>
                                <DropdownMenuLabel>
                                    {details.title}
                                </DropdownMenuLabel>
                            </DropdownMenuContent>

                        </Card>

                    </>
                )}

            </div>
        </DropdownMenu>
    );
};

export default PosterCard;