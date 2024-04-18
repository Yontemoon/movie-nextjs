"use client"

import React from 'react';
import { MovieDetailsType, PersonCreditDetailsType } from '@/library/modals';
import { getYear } from "date-fns"
import Link from 'next/link';
import { roundNumber } from '@/utils/format';
import EditAccountIconsPerson from './EditAccountIconsPerson';
import Star from './icons/Star';
import { bree_serif, space_mono, patua_one } from '@/utils/font';


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
                        <div className='md:hidden flex justify-start'>
                            <EditAccountIconsPerson MovieDetails={details}/>
                        </div>
                        <h1 className={`${patua_one.className} overflow-hidden whitespace-nowrap `}>{details.title}</h1>
                        <div className='flex gap-4 md:text-base text-sm items-center'>
                            <h2 className='flex items-center'> <Star noEffect={true}/> {roundNumber(details.vote_average)}</h2>
                            <Link href={`/discover?year=${getYear(details.release_date)}&page=1`} className={`${space_mono.className} underline hover:text-secondaryRed`}>
                                <p>{getYear(details.release_date)}</p>
                            </Link>
                            <div className=' whitespace-nowrap'>
                                Directed by {directors.map((director) => (
                                    <Link href={`/person/${director.id}`}key={director.id} className={`${space_mono.className} underline hover:text-secondaryRed`}>
                                        {director.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='my-3'>
                        <p className={`text-sm uppercase ${space_mono.className}`}>{details.tagline}</p>
                    </div>
                    <div className='overflow-hidden '>
                        {details.overview}
                    </div>

                    {/* <AvatarCarousal credits={movieCredits.cast} /> */}

                </div>


            </div>

        </>
    );
};

export default MovieInfo;