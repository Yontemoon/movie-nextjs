"use client"

import React from 'react';
import { MovieDetailsType, PersonCreditDetailsType } from '@/library/modals';
import { getYear } from "date-fns"
import Link from 'next/link';
import { roundNumber } from '@/utils/format';
import EditAccountIconsPerson from './EditAccountIconsPerson';

type MovieInfoProps = {
    details: MovieDetailsType;
    movieCredits: PersonCreditDetailsType;
}

const MovieInfo = ({ details, movieCredits }: MovieInfoProps) => {
    
    const directors = movieCredits.crew.filter((movie) =>  movie.job === "Director" )
 
    return (
        <>
            <div className='w-full'>
                <div >
                    <div>
                        <div className='block md:hidden flex justify-center'>
                            <EditAccountIconsPerson MovieDetails={details}/>
                        </div>
                        <h1>{details.title}</h1>
                        <div className='flex gap-4 md:text-base text-xs'>
                            <h2 className=''>{roundNumber(details.vote_average)}</h2>
                            <Link href={`/discover?year=${getYear(details.release_date)}&page=1`}>
                                <h2>{getYear(details.release_date)}</h2>
                            </Link>
                            <div >
                                Directed by {directors.map((director) => (
                                    <Link href={`/person/${director.id}`}key={director.id} className='px-1'>
                                        {director.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='md:text-sm text-xs uppercase'>{details.tagline}</p>
                    </div>
                    <div className='overflow-hidden md:text-base text-sm'>
                        {details.overview}
                    </div>

                    {/* <AvatarCarousal credits={movieCredits.cast} /> */}

                </div>


            </div>

        </>
    );
};

export default MovieInfo;