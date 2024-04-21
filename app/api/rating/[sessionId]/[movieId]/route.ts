import { NextRequest } from "next/server"

export const POST = async (request: NextRequest, { params }: { params: { sessionId: string, movieId: string } }) => {
    try {
        const {rating} = await request.json()
        const sessionId = params.sessionId
        const movieId = params.movieId

        const postRequest = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/rating?session_id=${sessionId}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`, {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                value: rating
            })
        })
        const response = await postRequest.json()
        if (response.success) {
            return Response.json({ status: 200 })
        }
    } catch (error) {
        console.log(error)

    }
}

export const DELETE = async (request: NextRequest, { params }: { params: { sessionId: string, movieId: string } }) => {
    try {
        const sessionId = params.sessionId
        const movieId = params.movieId

        const postRequest = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/rating?session_id=${sessionId}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`, {
            method: 'DELETE',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        
        return Response.json(postRequest)
    } catch (error) {
        console.log(error)

    }
}