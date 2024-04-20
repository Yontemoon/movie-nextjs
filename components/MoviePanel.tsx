"use client"

import { ExternalIdsTypes, MovieDetailsType } from "@/library/modals";
import WatchlistIcon from "./WatchlistIcon";
import { useSession } from "next-auth/react";
import { useAccountInfoContext } from "@/provider/AccountInfoProvider";
import { useState, useEffect, useRef } from "react";
import FavoriteIcon from "./FavoriteIcon";
import StarRating from "./StarRating";
import EditAccountIconsPerson from "./EditAccountIconsPerson";
import { Separator } from "./ui/separator";
import Link from "next/link";


type PropTypes = {
    details: MovieDetailsType
    externalIds: ExternalIdsTypes
}

const MoviePanel = ({details, externalIds}: PropTypes) => {

    
    return (
        <section className="w-full h-32 bg-slate-700 rounded-lg justify-center flex flex-col items-center gap-2 shadow-2xl border border-gray-700">
            
            <EditAccountIconsPerson MovieDetails={details}/>
            <Separator/>
            <a href={`https://www.imdb.com/title/${externalIds.imdb_id}/`} rel='noopener noreferrer' target="_blank">
                <div className="text-sm hover:text-red transition-all duration-200 underline">
                    IMDb
                </div>
            </a>
            <Separator/>
            <a href={`https://www.themoviedb.org/movie/${externalIds.id}`} rel='noopener noreferrer' target="_blank">
                <div className="text-sm hover:text-red transition-all duration-200 underline">
                    TMDb
                </div>
            </a>
            
        </section>
    );
};

export default MoviePanel;