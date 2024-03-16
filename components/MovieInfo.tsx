"use client"

import React from 'react';
import { MovieDetailsType, PersonCreditDetailsType } from '@/library/modals';
import { imageUrl } from "@/library/url";
import Image from 'next/image';
import { getYear } from "date-fns"
import Link from 'next/link';
import AvatarCarousal from './AvatarCarousal';
import MovieInfoPoster from './MovieInfoPoster';
import MovieInfoBackdrop from './MovieInfoBackdrop';
import StarRating from './StarRating';

type MovieInfoProps = {
    details: MovieDetailsType;
    movieCredits: PersonCreditDetailsType;
}

const MovieInfo = ({ details, movieCredits }: MovieInfoProps) => {

    // const { data, mutate }: swrType = useSWR(`/api/recommendations/${session?.data?.user.id}/${session.data?.user.sessionId}/${movieId}`, fetcher)
    return (
        <>
            <MovieInfoBackdrop details={details}/>
            <div className='grid w-full gap-5 grid-cols-4 '>
                <MovieInfoPoster details={details} className='row-span-1'/>
                <div className='col-span-3'>
                    <div className=''>
                        <h1 className=''>{details.title}</h1>
                        <h2>{details.vote_average}</h2>
                        <Link href={`/discover?year=${getYear(details.release_date)}&page=1`}>
                            <h2>{getYear(details.release_date)}</h2>
                        </Link>
                        
                    </div>
                    <div>
                        <p>{details.tagline}</p>
                    </div>
                    <div className=' overflow-hidden'>
                        {details.overview}
                    </div>

                    <AvatarCarousal credits={movieCredits.cast} />

                </div>


            </div>

        </>
    );
};

export default MovieInfo;