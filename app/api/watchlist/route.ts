import { postFetchApi } from "@/library/db"
import { NextRequest } from "next/server"

export const POST = async (request: NextRequest, {params}: {params: {id: string, session_id: string}}) => {
    // const {id, sessionId} = await request.json()
    const id = params.id
    const sessionId = params.session_id
    // const postWatchlist = await postFetchApi(`account/:account_id/watchlist?session_id=`)
    const postRequest = await fetch(`https://api.themoviedb.org/3/account/${id}/watchlist?session_id=${sessionId}`, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'api_key': "26159e133fce51f3b8355cc25e0c2ff4"
        },
        body: JSON.stringify({
            media_type: 'movie', 
            media_id: 11, 
            watchlist: true})
    })
}

export const GET = async (request) => {
    console.log("testing123")
}