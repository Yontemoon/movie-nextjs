"use server"

import { fetchData } from '@/library/db';
import React from 'react';
import { MovieCreditDetailsType } from '@/library/modals';
import sortCrewInfo from '@/library/sortCrewInfo';
import PersonAccordianTable from '@/components/PersonAccordianTable';


type PersonPageParams = {
    params: {
        personId: number
    }
}

const PersonPage = async ({ params }: PersonPageParams) => {

    const movieCredits: MovieCreditDetailsType = await fetchData(`/person/${params.personId}/movie_credits?language=en-US`)
    const ActingCredits = movieCredits.cast
    const MiscCredits = sortCrewInfo(movieCredits.crew)

    return (
        <PersonAccordianTable ActingCredits={ActingCredits} MiscCredits={MiscCredits}/>
        
    );
};

export default PersonPage;