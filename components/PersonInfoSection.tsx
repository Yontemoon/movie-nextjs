"use client"

import { PersonDetailsType, ExternalIdsTypes } from "@/library/modals";
import Image from "next/image";
import { imageUrl } from "@/library/url";
import { useState } from "react";
import { patua_one } from "@/utils/font";

type PropTypes = {
    personDetails: PersonDetailsType;
    externalIds: ExternalIdsTypes
}

const PersonInfoSection = ({ personDetails, externalIds }: PropTypes) => {

    const [expandBio, setExpandBio] = useState(false)
   
    return (
        <>
            <div className="">
                <p className="uppercase text-sm">credits of</p>
                <h2 className={`${patua_one.className} text-xl`}>{personDetails.name}</h2>
            </div>
            <div className="lg:block gap-2 flex">            
                {personDetails.profile_path && <Image
                    className="rounded-lg top-0 left-0 border hover:border-slate-500 cursor-pointer shadow-xl w-[264px] inline-block max-w-[264px]"
                    style={{ alignSelf: "start" }}
                    src={`${imageUrl}${personDetails.profile_path}`}
                    alt={personDetails.name}
                    width={300} height={400}
                    priority
                />}
                {personDetails.biography === "" ? <div>Currenly no biography is present.</div> :
                <div className="lg:mt-5 lg:cursor-pointer ml-5" onClick={() => setExpandBio(!expandBio)}>
                    <p className={`text-sm whitespace-pre-line ${!expandBio ? "lg:line-clamp-3 line-clamp-[20]" : ""} overflow-hidden transition-transform`} >
                        {personDetails.biography}
                    </p>
                </div>}
            </div>
        </>
    );
};

export default PersonInfoSection;