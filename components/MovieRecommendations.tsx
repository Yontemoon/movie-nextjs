"use client"

import React, { Suspense } from 'react';
import { MovieDetailsType } from '@/library/modals';
import PosterCard from './PosterCard';
import PosterFallback from './PosterFallback';


type MovieRecommendationsProps = {
    movieRecommendations: MovieDetailsType[]
}

const MovieRecommendations = ({movieRecommendations}: MovieRecommendationsProps) => {
    

    
    // type swrType = {
    //     data: PosterCardType[]
    //     mutate: KeyedMutator<any>
    // }
    // const { data, mutate }: swrType = useSWR(`/api/recommendations/${session?.data?.user.id}/${session.data?.user.sessionId}/${movieId}`, fetcher)
    return (
        <>
            <h1 className='mt-4'>Recommendations</h1>
            <div className='flex flex-wrap gap-2 mt-5 items-center'>
                {movieRecommendations.map((movie) => (
                    <div key={movie.id} className='min-w-[136px] min-h-[200px] h-[200px]'>
                        <PosterCard details={movie} width={100} height={200} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default MovieRecommendations;