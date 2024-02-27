import { movieDetails } from '@/library/modals';
import React from 'react';
import { fetchResults } from '@/library/db';


const DiscoverResults = async ({
    genreQuery,
    yearQuery,
    countryQuery
}: {
    genreQuery: string,
    yearQuery: string,
    countryQuery: string
}) => {
    const results: movieDetails[] = await fetchResults
    (`/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreQuery}&year=${yearQuery}&with_origin_country=${countryQuery}`)


    return (
        <div>
            {results.map((result) => (
                <p key={result.id}>
                    {result.title}
                </p>
            ))}
        </div>
    );
};

export default DiscoverResults;