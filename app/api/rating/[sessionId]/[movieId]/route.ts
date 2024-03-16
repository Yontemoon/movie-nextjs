import { NextRequest } from "next/server"

export const POST = async (request: NextRequest, { params }: { params: { sessionId: string, movieId: string } }) => {
    try {
        const {value} = await request.json()
        const sessionId = params.sessionId
        const movieId = params.movieId

        const postRequest = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/rating?session_id=${sessionId}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`, {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                value: value
            })
        })
        console.log(postRequest)
        if (postRequest.status === 201) {
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
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjE1OWUxMzNmY2U1MWYzYjgzNTVjYzI1ZTBjMmZmNCIsInN1YiI6IjU0YmU2ZTE3YzNhMzY4NmM2MTAwY2I0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EwXgaHVl28xvznKNf7di1MaK1J5LMZ0uygw4cADqLTU'
            },
        })
        console.log(postRequest)
        return Response.json(postRequest)
    } catch (error) {
        console.log(error)

    }
}