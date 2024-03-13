import { NextRequest } from "next/server"

export const POST = async (request: NextRequest, {params}: {params: {accountId: string, sessionId: string, movieId: string}}) => {
    try {
        const accountId = params.accountId
        const sessionId = params.sessionId
        const movieId = params.movieId
        console.log(accountId),
        console.log(sessionId)
        console.log(movieId)
    
        const postRequest = await fetch(`https://api.themoviedb.org/3/account/${accountId}/watchlist?session_id=${sessionId}`, {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjE1OWUxMzNmY2U1MWYzYjgzNTVjYzI1ZTBjMmZmNCIsInN1YiI6IjU0YmU2ZTE3YzNhMzY4NmM2MTAwY2I0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EwXgaHVl28xvznKNf7di1MaK1J5LMZ0uygw4cADqLTU'
            },
            body: JSON.stringify({
                media_type: 'movie', 
                media_id: movieId, 
                watchlist: true
            })
        })
        if (postRequest.status === 201) {
            return Response.json({status: 200})
        }
    } catch (error) {
        console.log(error)

    }
}

export const DELETE = async (request: NextRequest, {params}: {params: {accountId: string, sessionId: string, movieId: string}}) => {
    try {
        const accountId = params.accountId
        const sessionId = params.sessionId
        const movieId = params.movieId
        console.log(accountId),
        console.log(sessionId)
        console.log(movieId)
    
        const postRequest = await fetch(`https://api.themoviedb.org/3/account/${accountId}/watchlist?session_id=${sessionId}`, {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjE1OWUxMzNmY2U1MWYzYjgzNTVjYzI1ZTBjMmZmNCIsInN1YiI6IjU0YmU2ZTE3YzNhMzY4NmM2MTAwY2I0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EwXgaHVl28xvznKNf7di1MaK1J5LMZ0uygw4cADqLTU'
            },
            body: JSON.stringify({
                media_type: 'movie', 
                media_id: movieId, 
                watchlist: false
            })
        })
        console.log(postRequest)
        return Response.json(postRequest)
    } catch (error) {
        console.log(error)

    }
}