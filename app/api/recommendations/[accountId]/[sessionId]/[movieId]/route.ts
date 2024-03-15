import { fetchData } from "@/library/db"
import { MovieDetailsType } from "@/library/modals";
import { NextRequest, NextResponse } from "next/server"
import { PosterCardType } from "@/library/modals";


// WILL RETURN A VALUE {MOVIE:ID, WATCHED: BOOLEAN}[]
export const GET = async (request: NextRequest, {params}: {params: {accountId: string, sessionId: string, movieId: string}}) => {
    try {
        const {accountId, sessionId, movieId} = params;
        const {results: movieRecommendations} = await fetchData(`/movie/${movieId}/recommendations?language=en-US&page=1`)
        // console.log(movieRecommendations)
        
        //GET all the movies in an array
        let watchlist: MovieDetailsType[] = []
        let totalPages = 1
        for (let i = 1; i <= totalPages; i++) {
            let fetchedWatchlist = await fetchData(`/account/${accountId}/watchlist/movies?session_id=${sessionId}&page=${i}`)
            watchlist.push(...fetchedWatchlist.results); 
            
            if (fetchedWatchlist.total_pages > totalPages) {
                totalPages = fetchedWatchlist.total_pages
            }
        }
        

        //checks the movierec to see if user put movie in watchlist
        let recommendedMovieWatched: PosterCardType[] = []
        movieRecommendations.map((recMovie: MovieDetailsType) => {
            if (watchlist.some(movie => movie.id === recMovie.id)) {
                recommendedMovieWatched.push({
                    id: recMovie.id,
                    watched: true,
                    poster_path: recMovie.poster_path,
                    title: recMovie.title
                })
            } else {
                recommendedMovieWatched.push({
                    id: recMovie.id,
                    poster_path: recMovie.poster_path,
                    title: recMovie.title,
                    watched: false
                })
            }

        })
        


        // console.log("full watchlist", watchlist)
        return Response.json(recommendedMovieWatched)
    } catch (error) {
        console.log(error)
    }
}