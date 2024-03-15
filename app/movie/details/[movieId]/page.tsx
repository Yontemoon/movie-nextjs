"use server"

import MovieInfo from "@/components/MovieInfo";
import MovieRecommendations from "@/components/MovieRecommendations";
import { fetchData } from "@/library/db";


type paramsProp = {
    params: {
        movieId: string
    }
}

const MovieDetailsPage = async ({params}: paramsProp) => {
    const [movieDetails, movieRecommendations, movieCredits] = await Promise.all([
        fetchData(`/movie/${params.movieId}?language=en-US`),
        fetchData(`/movie/${params.movieId}/recommendations?language=en-US&page=1`),
        fetchData(`/movie/${params.movieId}/credits?language=en-US`)
    ]);
    // console.log(movieCredits)
    return (
        <>
            <MovieInfo details={movieDetails} movieCredits={movieCredits}/>
            {/* <MovieRecommendations movieRecommendations={movieRecommendations}/>
             */}
            <MovieRecommendations movieRecommendations={movieRecommendations.results}/>


        </>
    );
};

export default MovieDetailsPage;