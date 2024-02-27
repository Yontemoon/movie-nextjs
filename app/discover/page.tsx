import { fetchResults } from '@/library/db';
import React from 'react';
import { movieDetails } from '@/library/modals';
import DiscoverResults from '@/components/DiscoverResults';
import DiscoverSelects from '@/components/DiscoverSelects';

const DiscoverPage = async ({
    searchParams
}: {
    searchParams?: {
        genre?: string
        page?: string
        year?: string
        country?: string
    }
}) => {

    const genreQuery = searchParams?.genre || "";
    const yearQuery = searchParams?.year || ""
    const countryQuery = searchParams?.country || ""

    return (
        <>
            <DiscoverSelects />
            <DiscoverResults genreQuery={genreQuery} yearQuery={yearQuery} countryQuery={countryQuery}/>
        </>
    );
};

export default DiscoverPage;