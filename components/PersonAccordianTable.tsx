"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { MovieCastDetails, MovieCrewDetails } from "@/library/modals";
import CreditTable from "./CreditTable";
import { CastColumns, CrewColumns } from "@/components/tableColumns";

type PageProps = {
    ActingCredits: MovieCastDetails[]
    MiscCredits: {
        department: string;
        credits: MovieCrewDetails[];
    }[]
}

const PersonAccordianTable = ({ ActingCredits, MiscCredits }: PageProps) => {


   

    ActingCredits.sort((a,b) => {
        const dateA = new Date(a.release_date).getTime();
        const dateB = new Date(b.release_date).getTime();
        return dateB - dateA;
    })

    const newMiscCredits = MiscCredits.map((section) => {
        // Sort the credits array
        const sortedCredits = section.credits.sort((a, b) => {
            const dateA = new Date(a.release_date).getTime();
            const dateB = new Date(b.release_date).getTime();
            return dateB - dateA;
        });
        // Return the sorted section
        return {
            ...section,
            credits: sortedCredits,
        };
    });
    

    return (

        <Accordion type="single" defaultValue={ActingCredits.length > 0 ? "accordian-0": "accordian-1"} collapsible className='w-full '>
            {ActingCredits.length > 0  && <AccordionItem value="accordian-0">
                <AccordionTrigger>Actor</AccordionTrigger>
                <AccordionContent className="">
                    <CreditTable data={ActingCredits} columns={CastColumns}/>
                </AccordionContent>
            </AccordionItem>}
            {newMiscCredits.map((department, index) => (
                <AccordionItem key={index+1} value={`accordian-${index+1}`}>
                    <AccordionTrigger>{department.department}</AccordionTrigger>
                    <AccordionContent>
                        <CreditTable data={department.credits} columns={CrewColumns}/>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>

    );
};

export default PersonAccordianTable;