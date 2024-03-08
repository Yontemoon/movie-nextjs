"use server"

import { movieDetails } from '@/library/modals';
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
        <div>
            <div className='flex-wrap flex gap-3 my-5'>
                {results.map((result: movieDetails) => (
                    <PosterCard key={result.id} details={result} width={256} height={384} sizes="(min-width: 560px) 256px, (min-width: 520px) calc(415vw - 1985px), calc(54.5vw - 24px)"/>
                ))}
            </div>
           

            <PaginationControls
                hasNextPage={Number(pageQuery) < total_pages}
                hasPrevPage={Number(pageQuery) > 1}
                totalPages={total_pages}
                currentPage={page}
            />
        </div>
    );
};

export default DiscoverResults;