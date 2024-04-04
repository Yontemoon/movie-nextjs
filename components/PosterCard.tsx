"use client"

import { MovieDetailsType } from '@/library/modals';
import Image from 'next/image';
import { imageUrl } from '@/library/url';
import { useState, useRef, useEffect } from 'react';
import { Card } from "@/components/ui/card"
import Link from 'next/link';

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuLabel } from './ui/dropdown-menu';
import DefaultPoster from './DefaultPoster';
import { useSession } from 'next-auth/react';
import { useAccountInfoContext } from '@/provider/AccountInfoProvider';


import EditAccountIcons from './EditAccountIcons';


type PosterProps = {
    details: MovieDetailsType
    className?: string
    width: number
    height: number;
    sizes?: string;
    pointerEvent?: boolean
}

const PosterCard = ({ details, className, width, height, sizes, pointerEvent = true, }: PosterProps) => {
    const session = useSession()
    const { watchlist, favorites, rated } = useAccountInfoContext()
    const [isLoading, setIsLoading] = useState(true)
    const [showHover, setShowHover] = useState(false)
    const [inWatchlist, setInWatchlist] = useState(false)
    const [inFavorite, setInfavorite] = useState(false)
    const [inRated, setInRated] = useState(false)
    const ellipsisRef = useRef<HTMLDivElement>(null)
    

    useEffect(() => {
        // console.log("its passing here");
        if (session.status === 'authenticated' && watchlist && favorites && rated) {
            setInWatchlist(watchlist?.some((movie) => movie.id === details.id));
            setInfavorite(favorites?.some((movie) => movie.id === details.id))
            setInRated(rated?.some((movie) => movie.id === details.id))
        }
    }, [session.status, watchlist, details.id, favorites, rated])

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

    return (
        
        <DropdownMenu>
            <div className='relative h-full'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Link href={`/movie/details/${details.id}`} className={`${pointerEvent ? `` : `pointer-events-none`}`}>
                    {details.poster_path === null ? 
                    <div className='h-full'>
                        <DefaultPoster movieTitle={`${details.title}`} /> 
                    </div> :
                        <Image
                            src={`${imageUrl}${details.poster_path}`}
                            alt={`${details.id}`}
                            width={width}
                            height={height}
                            sizes={sizes}
                            
                            className=
                            {`
                                w-full h-auto border-4 transition-all rounded-md 
                                shadow-2xl  duration-300 cursor-pointer 
                            
                                ${className} 
                                ${showHover ? 'opacity-50' : ''}
                                ${isLoading ? " blur-lg " : " blur-0 "}
                                ${inFavorite && "border-[#14c78f]" }
                                ${inWatchlist && "border-[#b22524]"}
                                
                                
                            `}
                            onLoad={() => setIsLoading(false)}
                            
                            priority
                            quality={50}
                            
                        />
                    }
                </Link>
                {showHover && (
                    <>
                        <Card className='absolute bottom-3 inset-x-3 transition-opacity duration-700 z-10 bg-opacity-60'>

                            <div className='flex justify-center gap-3'>
                                <EditAccountIcons 
                                    MovieDetails={details} 
                                    ellipsisRef={ellipsisRef}
                                    inWatchlist={inWatchlist}
                                    setInWatchlist={setInWatchlist}           
                                    inFavorite={inFavorite}
                                    setInfavorite={setInfavorite}
                                    setInRated={setInRated}
                                    inRated={inRated}
                                />

                                {/* <WatchlistIcon inWatchlist={inWatchlist} setInWatchlist={setInWatchlist} details={details} />
                                <FavoriteIcon inFavorite={inFavorite} setInfavorite={setInfavorite} details={details} />
                                <RatedIcon 
                                    inRated={inRated} setInRated={setInRated} 
                                    details={details} ellipsisRef={ellipsisRef} 
                                    inWatchlist={inWatchlist} setInWatchlist={setInWatchlist}
                                /> */}
                            </div>
                        </Card>

                    </>
                )}

            </div>
        </DropdownMenu>
        
    );
};

export default PosterCard;