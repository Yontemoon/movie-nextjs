"use client"

import React from 'react';
import { MovieDetailsType, MoviePosterType } from '@/library/modals';
import PosterCard from './PosterCard';
import Link from 'next/link';
import useSWR from 'swr'
import { fetcher } from '@/library/fetcher';
import { useSession } from 'next-auth/react';
import { PosterCardType } from '@/library/modals';
// fetchData(`/movie/${params.movieId}/recommendations?language=en-US&page=1`),
import { KeyedMutator } from 'swr';
import { useAccountInfoContext } from '@/provider/AccountInfoProvider';

type MovieRecommendationsProps = {
    movieRecommendations: MovieDetailsType[]
}

const MovieRecommendations = ({movieRecommendations}: MovieRecommendationsProps) => {
    const session = useSession()

    
    // type swrType = {
    //     data: PosterCardType[]
    //     mutate: KeyedMutator<any>
    // }
    // const { data, mutate }: swrType = useSWR(`/api/recommendations/${session?.data?.user.id}/${session.data?.user.sessionId}/${movieId}`, fetcher)
    return (
        <div className='flex flex-wrap gap-3 mt-5 items-center'>
            {movieRecommendations.map((movie) => (
                <div key={movie.id}>
                    <PosterCard details={movie} width={256} height={384} sizes="(min-width: 540px) 256px, calc(54.55vw - 24px)" />
                </div>
            ))}
        </div>
    );
};

export default MovieRecommendations;