"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { MovieCastDetails, MovieCrewDetails } from "@/library/modals";
import CreditTable from "./CreditTable";
import { CastColumns, CrewColumns } from "@/library/tableColumns";
import { useAccountInfoContext } from "@/provider/AccountInfoProvider";
import { DropdownMenu } from "./ui/dropdown-menu";

type PageProps = {
    ActingCredits: MovieCastDetails[]
    MiscCredits: {
        department: string;
        credits: MovieCrewDetails[];
    }[]
}

const PersonAccordianTable = ({ ActingCredits, MiscCredits }: PageProps) => {


    // console.log(ActingCredits)
    return (

        <Accordion type="single" defaultValue="item-0" collapsible className='w-full'>
            <AccordionItem value="item-0">
                <AccordionTrigger>Actor</AccordionTrigger>
                <AccordionContent>
                    <CreditTable data={ActingCredits} columns={CastColumns}/>
                </AccordionContent>
            </AccordionItem>
            {MiscCredits.map((department, index) => (
                <AccordionItem key={index} value={department.department} >
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