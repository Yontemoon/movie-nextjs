"use server"

import React from 'react';
import { movieDetails, MovieCreditDetailsType } from '@/library/modals';
import { imageUrl } from "@/library/url";
import Image from 'next/image';
import { getYear } from "date-fns"
import Link from 'next/link';
import AvatarCarousal from './AvatarCarousal';
import MovieInfoPoster from './MovieInfoPoster';

type MovieInfoProps = {
    details: movieDetails;
    movieCredits: MovieCreditDetailsType;
}

const MovieInfo = ({ details, movieCredits }: MovieInfoProps) => {
    return (
        <>
            <div
                className='relative h-[500px] w-screen'
                style={{ maskImage: 'linear-gradient(to bottom, black, transparent)' }}
            >
                <Image
                    alt={details.original_title}
                    src={`${imageUrl}${details.backdrop_path}`}
                    fill
                    priority
                    className='absolute inset-0  w-full object-cover'
                    placeholder='blur'
                    blurDataURL={`${imageUrl}${details.backdrop_path}`} //plaiceholder?
                    sizes="100vw"
                // quality={60}
                />
            </div>
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