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
        sortBy?: string
    }
}) => {

    const genreQuery = searchParams?.genre || "";
    const yearQuery = searchParams?.year || "";
    const countryQuery = searchParams?.country || "";
    const sortByQuery = searchParams?.sortBy || ""
    const pageQuery = searchParams?.page || "1"

    return (
        <>
            <DiscoverSelects />
            <DiscoverResults genreQuery={genreQuery} yearQuery={yearQuery} countryQuery={countryQuery} sortByQuery={sortByQuery} pageQuery={pageQuery}/>
        </>
    );
};

export default DiscoverPage;