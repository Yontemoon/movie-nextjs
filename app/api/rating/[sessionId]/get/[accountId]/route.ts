import { NextRequest } from "next/server"
import { MovieDetailsType } from "@/library/modals"
import { fetchData } from "@/library/db"

type RatedType = MovieDetailsType & {
    rating: string
}

export const GET = async (request: NextRequest, { params }: { params: { accountId: string, sessionId: string } }) => {

    try {
        const accountId = params.accountId
        const sessionId = params.sessionId
        // const movieId = params.movieId
    
        let rated: RatedType[] = []
        let totalPages = 1
        for (let i = 1; i <= totalPages; i++) {
            let fetchedWatchlist = await fetchData(`/account/${accountId}/rated/movies?language=en-US&session_id=${sessionId}&page=${i}`)
            rated.push(...fetchedWatchlist.results);
    
            if (fetchedWatchlist.total_pages > totalPages) {
                totalPages = fetchedWatchlist.total_pages
            }
        }
        console.log(rated)
        return Response.json(rated)
    } catch (error) {
        console.error(error)
    }
  
}