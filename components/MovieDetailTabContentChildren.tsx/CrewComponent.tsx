"use client"

import { PersonCrewDetails } from "@/library/modals";
import Link from "next/link";

type PropTypes = {
    crew: {
        job: string;
        credits: PersonCrewDetails[];
    }[]
}

const CrewComponent = ({crew}: PropTypes) => {
    return (
        <ul className="my-5 ">
            {crew.map((crewJob) => (
                <li key={crewJob.job} className="grid align-baseline mb-3 grid-cols-3 ">
                    <span className="col-span-1">
                        <p className="flex uppercase">{crewJob.job}<span className="dots" ></span></p>
                    </span>
                    <span className="col-span-2 flex flex-wrap gap-1 ">
                        {crewJob.credits.map((credit) => (
                            <Link
                                key={credit.id}
                                href={`/person/${credit.id}`}
                                className={
                                    `text-box`
                                }
                            >
                                {credit.name}
                            </Link>
                        ))}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default CrewComponent;