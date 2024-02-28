import { movieDetails } from '@/library/modals';
import React from 'react';
import { fetchResults, fetchData } from '@/library/db';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import PaginationControls from './PaginationControls';


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
            {results.map((result: movieDetails) => (
                <p key={result.id}>
                    {result.title}
                </p>
            ))}

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