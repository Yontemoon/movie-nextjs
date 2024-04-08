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
            <Carousel className=' '>
                <div className='flex justify-between items-center py-3'>
                    <h1>{title}</h1>
                    <div className='gap-x-3'>
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </div>
                <CarouselContent>
                    {movieList.map((movie) => (
                        <CarouselItem key={movie.id} className='lg:basis-1/5 md:basis-1/4 basis-1/3'>
                            <PosterCard details={movie} width={264} height={300}/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>
    );
};

export default CarousalDefault;