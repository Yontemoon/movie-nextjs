import React from 'react';
import { MoviePosterType } from '@/library/modals';
import PosterCard from './PosterCard';
import Link from 'next/link';


type MovieRecommendationsProps = {
    movieRecommendations: {
        page: number;
        results: MoviePosterType[];
        total_pages: number;
        total_results: number;
    };
}

const MovieRecommendations = ({movieRecommendations}: MovieRecommendationsProps) => {
    return (
        <div className='flex flex-wrap gap-3 mt-5 items-center'>
            {movieRecommendations.results.map((movie) => (
                // <Link href={`/movie/details/${movie.id}`} key={movie.id} className='z-0'>
                <div key={movie.id}>
                    <PosterCard details={movie} width={256} height={384} sizes="(min-width: 540px) 256px, calc(54.55vw - 24px)" />
                </div>
                // </Link>
            ))}
        </div>
    );
};

export default MovieRecommendations;