"use client"

import { MoviePosterType, MovieDetailsType } from '@/library/modals';
import Image from 'next/image';
import { imageUrl } from '@/library/url';
import { useState, useRef } from 'react';
import { Card } from "@/components/ui/card"
import Link from 'next/link';
import Eyes from './icons/Eye';
import Heart from './icons/Heart';
import { toast } from 'sonner';
import Ellipsis from './icons/Ellipsis';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuLabel } from './ui/dropdown-menu';
import DefaultPoster from './DefaultPoster';


type PosterProps = {
    details: MovieDetailsType | MoviePosterType
    className?: string
    width: number
    height: number;
    sizes?: string;
    pointerEvent?: boolean
}

const PosterCard = ({ details, className, width, height, sizes, pointerEvent = true }: PosterProps) => {

    const [isLoading, setIsLoading] = useState(true)
    const [showHover, setShowHover] = useState(false)
    const ellipsisRef = useRef<HTMLDivElement>(null)

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

    const handleWatchlistIcon = () => {
        toast(`Added '${details.title}' to your watchlist.`)
    }

    const handleLikeIcon = () => {
        toast(`Added '${details.title}' to your Like list.`)
    }


    return (
        <DropdownMenu>
        <div className='relative'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link href={`/movie/details/${details.id}`} className={pointerEvent ? `` : `pointer-events-none`}>
                {details.poster_path === null ? <DefaultPoster movieTitle={`${details.title}`}/> :
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
                    onLoadingComplete={() => setIsLoading(false)}
                    priority
                    quality={50}
                    
                    
                />}
            </Link>
            {showHover && (
                <>
                <Card className='absolute bottom-3 inset-x-3 transition-opacity duration-700 z-10'>
                    
                    {/* <h2>{details.title}</h2> */}
                    <div className='flex justify-center gap-3'>
                        <Eyes onClick={handleWatchlistIcon}/>
                        <Heart onClick={handleLikeIcon}/>
                        <DropdownMenuTrigger >
                            <Ellipsis/>
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