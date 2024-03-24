"use client"

import React from 'react';
import { MovieDetailsType, PersonCreditDetailsType } from '@/library/modals';
import { getYear } from "date-fns"
import Link from 'next/link';
import { roundNumber } from '@/utils/format';

type MovieInfoProps = {
    details: MovieDetailsType;
    movieCredits: PersonCreditDetailsType;
}

const MovieInfo = ({ details, movieCredits }: MovieInfoProps) => {
    
    const directors = movieCredits.crew.filter((movie) =>  movie.job === "Director" )
 
    return (
        <>
            <div className='w-full'>
                <div className=''>
                    <div className=''>
                        <h1 className=''>{details.title}</h1>
                        <div className='flex gap-4'>
                            <h2>{roundNumber(details.vote_average)}</h2>
                            <Link href={`/discover?year=${getYear(details.release_date)}&page=1`}>
                                <h2>{getYear(details.release_date)}</h2>
                            </Link>
                            <>
                            Directed by {directors.map((director) => (
                                <Link href={`/person/${director.id}`}key={director.id}>
                                    {director.name}
                                </Link>
                            ))}
                            </>
                        </div>
                    </div>
                    <div>
                        <p className='text-sm uppercase'>{details.tagline}</p>
                    </div>
                    <div className='overflow-hidden'>
                        {details.overview}
                    </div>

                    {/* <AvatarCarousal credits={movieCredits.cast} /> */}

                </div>


            </div>

        </>
    );
};

export default MovieInfo;