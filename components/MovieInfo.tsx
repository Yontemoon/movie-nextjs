"use server"

import React from 'react';
import { movieDetails, PersonCreditDetailsType } from '@/library/modals';
import { imageUrl } from "@/library/url";
import Image from 'next/image';
import { getYear } from "date-fns"
import Link from 'next/link';
import AvatarCarousal from './AvatarCarousal';
import MovieInfoPoster from './MovieInfoPoster';
import MovieInfoBackdrop from './MovieInfoBackdrop';

type MovieInfoProps = {
    details: movieDetails;
    movieCredits: PersonCreditDetailsType;
}

const MovieInfo = ({ details, movieCredits }: MovieInfoProps) => {
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