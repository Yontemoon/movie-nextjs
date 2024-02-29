"use server"

import MovieInfo from "@/components/MovieInfo";
import { fetchData } from "@/library/db";

type paramsProp = {
    params: {
        movieId: string
    }
}

const MovieDetailsPage = async ({params}: paramsProp) => {
    const movieDetails = await fetchData(`/movie/${params.movieId}?language=en-US`)
    return (
        <>
            <MovieInfo details={movieDetails}/>
        </>
    );
};

export default MovieDetailsPage;