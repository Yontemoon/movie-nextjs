import React from 'react';
import { movieDetails } from '@/library/modals';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';
import { imageUrl } from '@/library/url';
import Link from 'next/link';
import { Separator } from './ui/separator';


type NowPlayingTypes = {
    movieList: movieDetails[];
    title: string
}

const CarousalDefault = ({movieList, title}: NowPlayingTypes) => {

    
    return (
        <>
            <Carousel>
                <div className='flex justify-between items-center'>
                    <h1>{title}</h1>
                    <div className='gap-y-3'>
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </div>
                <CarouselContent>
                    {movieList.map((movie) => (
                        <CarouselItem key={movie.id} className='md:basis-1/3 lg:basis-1/5'>
                            <Link href={`/movie/details/${movie.id}`}>
                            <div className=''>
                                <Image 
                                    width={1000}
                                    height={1000}
                                    alt={movie.title}
                                    src={`${imageUrl}${movie.poster_path}`}
                                    className='rounded-md hover:opacity-80 transition-opacity'
                                />
                            </div>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>
    );
};

export default CarousalDefault;