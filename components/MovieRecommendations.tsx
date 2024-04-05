"use client"

import React, { Suspense } from 'react';
import { MovieDetailsType } from '@/library/modals';
import PosterCard from './PosterCard';



type MovieRecommendationsProps = {
    movieRecommendations: MovieDetailsType[]
}

const MovieRecommendations = ({movieRecommendations}: MovieRecommendationsProps) => {
    console.log(movieRecommendations)
    
    return (
        <section>
            {movieRecommendations.length > 0 && <>
                <h1 className='mt-4'>Recommendations</h1>
                <div className='flex flex-wrap gap-2 mt-5 items-center'>
                    {movieRecommendations.map((movie) => (
                        <div key={movie.id} className='w-[136px] h-[200px] '>
                            <PosterCard details={movie} width={100} height={200} />
                        </div>
                    ))}
                </div>
            </>}
        </section>
    );
};

export default MovieRecommendations;