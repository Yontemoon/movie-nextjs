"use server"

import React from 'react';
import MovieInfo from "@/components/MovieInfo";
import MovieRecommendations from "@/components/MovieRecommendations";
import { fetchData } from "@/library/db";
import MovieInfoPoster from "@/components/MovieInfoPoster";
import MovieInfoBackdrop from "@/components/MovieInfoBackdrop";
import MovieDetailsTabContent from '@/components/MovieDetailTabContent';


type paramsProp = {
    params: {
        movieId: string
    },
    children: React.ReactNode
}

const MovieDetailsLayout = async ({params, children}: paramsProp) => {
    const [movieDetails, movieRecommendations, movieCredits, movieAltTitles] = await Promise.all([
        fetchData(`/movie/${params.movieId}?language=en-US`),
        fetchData(`/movie/${params.movieId}/recommendations?language=en-US&page=1`),
        fetchData(`/movie/${params.movieId}/credits?language=en-US`),
        fetchData(`/movie/${params.movieId}/alternative_titles`)
    ]);
    // console.log(movieCredits)
    return (
        <>
            <MovieInfoBackdrop details={movieDetails}/>
            <div className="grid grid-cols-8 gap-5 h-full items-start" >
                <div className="sticky top-5 col-span-2" >
                    <MovieInfoPoster details={movieDetails} className="col-span-1 min-w-[264px] min-h-[392px]" />
                </div>
                <div className="col-span-5">
                    <MovieInfo details={movieDetails} movieCredits={movieCredits}/>
                    <MovieDetailsTabContent movieId={params.movieId} details={movieDetails} movieCredits={movieCredits} movieAltTitles={movieAltTitles}/>
                    {children}
                    <MovieRecommendations movieRecommendations={movieRecommendations.results}/>
                </div>
                <div className='sticky top-5 col-span-1 bg-slate-200'>
                    CHANGE LATER
                </div>
            </div>
          
        </>
    );
};

export default MovieDetailsLayout;