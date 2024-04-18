"use client"

import { PersonDetailsType, ExternalIdsTypes } from "@/library/modals";
import Image from "next/image";
import { imageUrl } from "@/library/url";
import { useState } from "react";
import { bree_serif, patua_one } from "@/utils/font";

type PropTypes = {
    personDetails: PersonDetailsType;
    externalIds: ExternalIdsTypes
}

const PersonInfoSection = ({ personDetails, externalIds }: PropTypes) => {

    const [expandBio, setExpandBio] = useState(false)
    
    return (
        <div >

            <div className="">
                <p className="uppercase text-sm">credits of</p>
                <h2 className={`${patua_one.className} text-xl`}>{personDetails.name}</h2>
            </div>
            <div className="lg:block gap-2 flex">            
                <Image
                    className="rounded-lg top-0 left-0 border hover:border-blue-300 cursor-pointer shadow-xl w-[264px]"
                    style={{ alignSelf: "start" }}
                    src={`${imageUrl}${personDetails.profile_path}`}
                    alt={personDetails.name}
                    width={300} height={400}
                    priority
                />
                <div className="lg:mt-5 cursor-pointer" onClick={() => setExpandBio(!expandBio)}>
                    <p className={`text-sm whitespace-pre-line ${!expandBio ? "lg:line-clamp-3 line-clamp-6" : ""} overflow-hidden transition-transform`} >
                        {personDetails.biography}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PersonInfoSection;