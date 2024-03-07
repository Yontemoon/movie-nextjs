"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from 'next/link';
import { MovieCastDetails, MovieCrewDetails } from "@/library/modals";
import { formatDate } from "@/utils/format";
import { roundNumber } from "@/utils/format";
import CreditTable from "./CreditTable";

type PageProps = {
    ActingCredits: MovieCastDetails[]
    MiscCredits: {
        department: string;
        credits: MovieCrewDetails[];
    }[]
}

const PersonAccordianTable = ({ ActingCredits, MiscCredits }: PageProps) => {
    return (
        <Accordion type="single" defaultValue="item-0" collapsible className='w-full'>
            <AccordionItem value="item-0">
                <AccordionTrigger>Actor</AccordionTrigger>
                <AccordionContent>
                    <CreditTable data={ActingCredits} creditType="cast"/>
                    
                    
                </AccordionContent>
            </AccordionItem>
            {MiscCredits.map((department, index) => (
                <AccordionItem key={index} value={department.department} >
                    <AccordionTrigger>{department.department}</AccordionTrigger>
                    <AccordionContent>
                        <CreditTable data={department.credits} creditType="crew"/>

                        
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default PersonAccordianTable;