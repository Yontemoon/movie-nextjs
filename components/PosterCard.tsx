import React from 'react';
import { movieDetails } from '@/library/modals';
import Image from 'next/image';
import { imageUrl } from '@/library/url';

type PosterProps = {
    details: movieDetails
}

const PosterCard = ({ details }: PosterProps) => {
    return (

            <Image
                src={`${imageUrl}${details.poster_path}`}
                alt={`${details.genre_ids}`}
                width={200}
                height={200}
                className='w-auto h-auto border-2 border-white rounded-md shadow-2xl hover:border-slate-500 transition-shadow duration-300 cursor-pointer'
            />
    );
};

export default PosterCard;