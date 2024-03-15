import React from 'react';
import { MovieDetailsType } from '@/library/modals';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link';
import PosterCard from './PosterCard';
import { PosterCardType } from '@/library/modals';


type NowPlayingTypes = {
    movieList: MovieDetailsType[];
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
                            <PosterCard details={movie} width={264} height={300}/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>
    );
};

export default CarousalDefault;