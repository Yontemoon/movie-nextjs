"use server"
import React from 'react';
import MovieInfo from "@/components/MovieInfo";
import MovieRecommendations from "@/components/MovieRecommendations";
import { fetchData } from "@/library/db";
import MovieInfoPoster from "@/components/MovieInfoPoster";
import MovieInfoBackdrop from "@/components/MovieInfoBackdrop";
import MovieDetailsTabContent from '@/components/MovieDetailTabContent';
import { Metadata } from 'next';
import MoviePanel from '@/components/MoviePanel';

type paramsProp = {
    params: {
        movieId: string
    }
}

// export const metadata: Metadata = {
//     title: "Movie",
//     description: "Generated by create next app",
//   };


const MovieDetailsPages = async ({params}: paramsProp) => {
    const [movieDetails, movieRecommendations, movieCredits, movieAltTitles, movieExternalIds] = await Promise.all([
        fetchData(`/movie/${params.movieId}?language=en-US`),
        fetchData(`/movie/${params.movieId}/recommendations?language=en-US&page=1`),
        fetchData(`/movie/${params.movieId}/credits?language=en-US`),
        fetchData(`/movie/${params.movieId}/alternative_titles`),
        fetchData(`movie/${params.movieId}/external_ids`)
    ]);
    // console.log(movieCredits)
    return (
        <>
            <MovieInfoBackdrop details={movieDetails}/>
            <div className="grid xl:grid-cols-8 grid-cols-5 gap-5 h-full items-start" >
                <div className="xl:sticky top-5 xl:col-span-2 hidden xl:block" >
                    <MovieInfoPoster details={movieDetails} />
                </div>
                <div className="xl:col-span-5 md:col-span-4 col-span-5">
                    <MovieInfo details={movieDetails} movieCredits={movieCredits}/>
                    <MovieDetailsTabContent movieId={params.movieId} details={movieDetails} movieCredits={movieCredits} movieAltTitles={movieAltTitles}/>
                    <MovieRecommendations movieRecommendations={movieRecommendations.results}/>
                </div>
                <div className='md:sticky top-20 md:col-span-1 md:block hidden'>
                    <MoviePanel details={movieDetails} externalIds={movieExternalIds}/>
                </div>
            </div>
          
        </>
    );
};

export default MovieDetailsPages;