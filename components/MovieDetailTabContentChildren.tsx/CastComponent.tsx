"use client"

import { PersonCreditDetailsType } from "@/library/modals";
import Link from "next/link";


type PropTypes = {
    movieCredits: PersonCreditDetailsType
}
const CastComponent = ({movieCredits}: PropTypes) => {
    return (
        <div className="flex flex-wrap gap-1 py-3">
            {movieCredits.cast.map((cast) => (
                <Link href={`/person/${cast.id}`} key={cast.id}
                    className="text-box">
                    {cast.name}
                </Link>
            ))}
        </div>
    );
};

export default CastComponent;