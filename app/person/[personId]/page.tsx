"use server"

import { fetchData } from '@/library/db';
import React from 'react';
import { MovieCreditDetailsType } from '@/library/modals';
import sortPersonCrewInfo from '@/library/sortCrewInfo';
import PersonAccordianTable from '@/components/PersonAccordianTable';
import Image from 'next/image';
import { imageUrl } from '@/library/url';
import { PersonDetailsType } from '@/library/modals';
import PersonInfoSection from '@/components/PersonInfoSection';



type PersonPageParams = {
    params: {
        personId: number
    }
}

const PersonPage = async ({ params }: PersonPageParams) => {
    // const {Watchlist, rated, favorites} = useAccountInfoContext()

    const personDetails: PersonDetailsType = await fetchData(`/person/${params.personId}?language=en-US`)
    const externalIds = await fetchData(`/person/${params.personId}/external_ids`)
    const movieCredits: MovieCreditDetailsType = await fetchData(`/person/${params.personId}/movie_credits?language=en-US`)
    const ActingCredits = movieCredits.cast
    const MiscCredits = sortPersonCrewInfo(movieCredits.crew)
    // console.log(personDetails)
    return (
        <div className='grid grid-cols-4 gap-10 my-5 '>
            <div className=' top-10 col-span-1'>
                <PersonInfoSection personDetails={personDetails} externalIds={externalIds}/>
            </div>
            <div className='col-span-3'>
                {/* <PersonDetails/> */}
                <PersonAccordianTable ActingCredits={ActingCredits} MiscCredits={MiscCredits}/>

            </div>
        
        </div>
        
    );
};

export default PersonPage;