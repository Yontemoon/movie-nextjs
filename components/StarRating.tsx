"use client"

import React, { useEffect, useState, useRef } from 'react'
import { useAccountInfoContext } from '@/provider/AccountInfoProvider'
import { Rating } from 'react-simple-star-rating'
import { useSession } from 'next-auth/react'
import { useToast } from './ui/use-toast'
import { MovieDetailsType, RatedType } from '@/library/modals'
import { Button } from './ui/button'
import { addToRatedList, removeFromList } from '@/library/crud'
import { localFetch } from '@/library/db'


type StarRatingPropType = {
    movieDetails: MovieDetailsType;
    inRated: boolean
    setInRated: React.Dispatch<React.SetStateAction<boolean>>
    inWatchlist: boolean;
    setInWatchlist: React.Dispatch<React.SetStateAction<boolean>>
}

const StarRating = ({ movieDetails, inRated, setInRated, inWatchlist, setInWatchlist }: StarRatingPropType) => {

    const { rated, setRated, watchlist, setWatchlist } = useAccountInfoContext()
    const session = useSession()
    const {toast} = useToast()

    const [rating, setRating] = useState(inRated ? (() => {
        const movie = rated?.find((movie) => movie.id === movieDetails.id)
        if (movie) {
            return movie.rating
        }
    }) : 0)

    const handleRating = async (rate: number) => {
        if (session.status === "authenticated") {
            const body = {
                rating: rate * 2
            }


            const request = await localFetch(`/api/rating/${session.data.user.sessionId}/${movieDetails.id}`, 'POST',body)
            if (request.status === 200) {
                setRating(rate*2)
                setInRated(true)
               
                const newRatedMovie: RatedType = {
                    ...movieDetails,
                    rating: rate * 2
                }
                if (rated) {
                    const newRatedList = addToRatedList(rated, newRatedMovie) as RatedType[];
                    setRated(newRatedList)

                }
                
                if (inWatchlist === true && watchlist) {
                    setWatchlist(removeFromList(watchlist, movieDetails.id))
                    setInWatchlist(false)
                }
                toast({ description: `You rated '${movieDetails.title}' a ${rate*2}.` })
            }
        } else {
            toast({
                title: "Log in Required",
                variant: "destructive",
                description: 'You must be logged in to rate films.'
            })
        }
    }

    const handleReset = async () => {
        if (session.status === "authenticated") {

            const request = await localFetch(`/api/rating/${session.data.user.sessionId}/${movieDetails.id}`, 'DELETE')
            if (request.status === 200 && rated) {
                setRating(0)
                const newRatedList = removeFromList(rated, movieDetails.id) as RatedType[]
                setRated(newRatedList)
                setInRated(false)
                toast({description: `You removed your rating of '${movieDetails.title}' from your list.`})
            }
        }
        
    }

    return (
        <div >
            <Rating
                onClick={handleRating}
                SVGstyle={{ display: 'inline-block' }}
                iconsCount={5}
                transition={true}
                allowFraction={true}
                initialValue={rating && rating / 2}
            />
            {rating && rating > 0 && <Button variant="destructive" onClick={handleReset}>Clear Rating</Button>}

        </div>
    );
};

export default StarRating;