"use client"

import React from 'react';
import { MovieDetailsType } from '@/library/modals';
import PosterCard from './PosterCard';


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
        <div className='flex flex-wrap gap-1 mt-5 items-center'>
            {movieRecommendations.map((movie) => (
                <div key={movie.id}>
                    <PosterCard details={movie} width={256} height={384} sizes="(min-width: 540px) 256px, calc(54.55vw - 24px)" />
                </div>
            ))}
        </div>
    );
};

export default MovieRecommendations;