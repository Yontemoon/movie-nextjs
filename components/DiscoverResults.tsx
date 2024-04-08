"use server"

import { MovieDetailsType, PosterCardType } from '@/library/modals';
import React from 'react';
import { fetchData } from '@/library/db';

import PaginationControls from './PaginationControls';
import PosterCard from './PosterCard';


const DiscoverResults = async ({
    genreQuery,
    yearQuery,
    countryQuery,
    sortByQuery,
    pageQuery
}: {
    genreQuery: string,
    yearQuery: string,
    countryQuery: string
    sortByQuery: string
    pageQuery: string
}) => {
    const {
        results, 
        total_pages, 
        page
    } = await fetchData
        (`/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageQuery}&sort_by=${sortByQuery}&with_genres=${genreQuery}&year=${yearQuery}&with_origin_country=${countryQuery}`)

    return (
        < >
            <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3 py-3 justify-center overflow-hidden'>
                {results.map((result: MovieDetailsType) => (
                    <div key={result.id} className=' h-full w-full'>
                        <PosterCard  details={result} width={256} height={384} sizes="(min-width: 560px) 256px, (min-width: 520px) calc(415vw - 1985px), calc(54.5vw - 24px)"/>
                        
                    </div>
                ))}
            </div>
           

            <PaginationControls
                hasNextPage={Number(pageQuery) < total_pages}
                hasPrevPage={Number(pageQuery) > 1}
                totalPages={total_pages}
                currentPage={page}
            />
        </>
    );
};

export default DiscoverResults;