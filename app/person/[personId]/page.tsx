"use server"

import { fetchData } from '@/library/db';
import React from 'react';
import { MovieCreditDetailsType } from '@/library/modals';
import sortCrewInfo from '@/library/sortCrewInfo';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type PersonPageParams = {
    params: {
        personId: number
    }
}

const PersonPage = async ({ params }: PersonPageParams) => {

    const movieCredits: MovieCreditDetailsType = await fetchData(`/person/${params.personId}/movie_credits?language=en-US`)
    const ActingCredits = movieCredits.cast
    const MiscCredits = sortCrewInfo(movieCredits.crew)
    console.log(MiscCredits)
    return (
        <Accordion type="single" defaultValue="item-1" collapsible className='w-full'>
            <AccordionItem value="item-1">
                <AccordionTrigger>Actor</AccordionTrigger>
                <AccordionContent>
                    {ActingCredits.map((credit) => (
                        <p key={credit.id}>{credit.title}</p>
                    ))}
                </AccordionContent>
            </AccordionItem>
            {MiscCredits.map((department, index) => (
                <AccordionItem key={index} value={department.department}>
                    <AccordionTrigger>{department.department}</AccordionTrigger>
                    <AccordionContent>
                        {department.credits.map((movie) => (
                            <p key={movie.id}>
                                {movie.title}
                            </p>
                        ))}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default PersonPage;