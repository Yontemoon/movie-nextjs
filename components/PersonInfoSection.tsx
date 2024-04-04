"use client"

import { PersonDetailsType, ExternalIdsTypes } from "@/library/modals";
import Image from "next/image";
import { imageUrl } from "@/library/url";
import { useState } from "react";

type PropTypes = {
    personDetails: PersonDetailsType;
    externalIds: ExternalIdsTypes
}

const PersonInfoSection = ({ personDetails, externalIds }: PropTypes) => {

    const [expandBio, setExpandBio] = useState(false)
    
    return (
        <div>

            <div>
                <p className="uppercase text-sm">credits of</p>
                <h2 className="text-lg">{personDetails.name}</h2>
            </div>
            <Image
                className="  rounded-lg top-0 left-0 border hover:border-blue-300 cursor-pointer"
                style={{ alignSelf: "start" }}
                src={`${imageUrl}${personDetails.profile_path}`}
                alt={personDetails.name}
                width={600} height={800}
                priority
            />
            <div className="mt-5 cursor-pointer" onClick={() => setExpandBio(!expandBio)}>
                <p className={`text-sm whitespace-pre-line ${!expandBio ? "line-clamp-3" : ""} overflow-hidden transition-transform`} >
                    {personDetails.biography}
                </p>
            </div>
        </div>
    );
};

export default PersonInfoSection;