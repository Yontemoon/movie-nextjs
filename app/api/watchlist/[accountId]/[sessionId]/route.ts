import { NextRequest } from "next/server"
import { MovieDetailsType } from "@/library/modals"
import { fetchData } from "@/library/db"

export const GET = async (request: NextRequest, { params }: { params: { accountId: string, sessionId: string } }) => {

    try {
        const accountId = params.accountId
        const sessionId = params.sessionId
        // const movieId = params.movieId
    
        let watchlist: MovieDetailsType[] = []
        let totalPages = 1
        for (let i = 1; i <= totalPages; i++) {
            let fetchedWatchlist = await fetchData(`/account/${accountId}/watchlist/movies?session_id=${sessionId}&page=${i}`)
            watchlist.push(...fetchedWatchlist.results);
    
            if (fetchedWatchlist.total_pages > totalPages) {
                totalPages = fetchedWatchlist.total_pages
            }
        }

        return Response.json(watchlist)
    } catch (error) {
        console.error(error)
    }
  
}