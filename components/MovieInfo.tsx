"use client"

import React from 'react';
import { movieDetails } from '@/library/modals';
import { imageUrl } from "@/library/url";
import Image from 'next/image';
import PosterCard from './PosterCard';
type MovieInfoProps = {
    details: movieDetails
}

const MovieInfo = ({ details }: MovieInfoProps) => {
    return (
        <>
            <div
                className='relative h-96 w-screen'
                style={{ maskImage: 'linear-gradient(to bottom, black, transparent)' }}
            >
                <Image
                    alt={details.original_title}
                    src={`${imageUrl}${details.backdrop_path}`}
                    fill
                    priority
                    className='absolute inset-0 object-top w-full h-full object-cover'
                />

            </div>
            <div className='flex'>
                <PosterCard details={details} />
                <div>
                    
                </div>
            </div>

        </>
    );
};

export default MovieInfo;