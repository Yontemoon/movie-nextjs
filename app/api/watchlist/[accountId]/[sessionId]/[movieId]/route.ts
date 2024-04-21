import { NextRequest, NextResponse } from "next/server"
import { MovieDetailsType } from "@/library/modals"
import { fetchData } from "@/library/db"

export const POST = async (request: NextRequest, { params }: { params: { accountId: string, sessionId: string, movieId: string } }) => {
    try {
        const accountId = params.accountId
        const sessionId = params.sessionId
        const movieId = params.movieId

        const postRequest = await fetch(`https://api.themoviedb.org/3/account/${accountId}/watchlist?session_id=${sessionId}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`, {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                media_type: 'movie',
                media_id: movieId,
                watchlist: true
            })
        })
        if (postRequest.status === 201) {
            return Response.json({ status: 200 })
        }
    } catch (error) {
        console.log(error)

    }
}

export const DELETE = async (request: NextRequest, { params }: { params: { accountId: string, sessionId: string, movieId: string } }) => {
    try {
        const accountId = params.accountId
        const sessionId = params.sessionId
        const movieId = params.movieId

        const postRequest = await fetch(`https://api.themoviedb.org/3/account/${accountId}/watchlist?session_id=${sessionId}`, {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',               
            },
            body: JSON.stringify({
                media_type: 'movie',
                media_id: movieId,
                watchlist: false
            })
        })
        console.log(postRequest)
        return Response.json({message: `Movie ID ${movieId} successful`}, {status: 200})
    } catch (error) {
        console.log(error)

    }
}

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