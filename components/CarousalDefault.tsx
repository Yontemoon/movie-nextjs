import React from 'react';
import { movieDetails } from '@/library/modals';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link';
import PosterCard from './PosterCard';


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
                                <PosterCard details={movie}/>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>
    );
};

export default CarousalDefault;