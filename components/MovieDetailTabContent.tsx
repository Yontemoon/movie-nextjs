"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AlternativeMovieTitlesType, MovieDetailsType, PersonCreditDetailsType } from "@/library/modals";
import { Separator } from "./ui/separator";
import { sortMovieCrewInfo } from "@/library/sortCrewInfo";
import CastComponent from "./MovieDetailTabContentChildren.tsx/CastComponent";
import CrewComponent from "./MovieDetailTabContentChildren.tsx/CrewComponent";
import DetailsComponent from "./MovieDetailTabContentChildren.tsx/DetailsComponent";
import GenreComponent from "./MovieDetailTabContentChildren.tsx/GenreComponent";

type PropType = {
    movieId: string
    details: MovieDetailsType
    movieCredits: PersonCreditDetailsType
    movieAltTitles: AlternativeMovieTitlesType
    
}

const MovieDetailsTabContent = ({ movieId, details, movieCredits, movieAltTitles }: PropType) => {
    
    const pathname = usePathname()
    const crew = sortMovieCrewInfo(movieCredits.crew)
    

    const [current, setCurrent] = useState("")


    useEffect(() => {

        if (pathname.includes("crew")) {
            setCurrent("crew")
        } else if (pathname.includes("info")) {
            setCurrent("info")
        } else if (pathname.includes("genres")) {
            setCurrent("genres")
        } else {
            setCurrent("cast")
        }
    }, [pathname])

    return (
        <section className="text-sm">
            <header className="flex gap-3 mt-7 uppercase">
                <p onClick={() => setCurrent("cast")} className={`${current === "cast" && "underline text-green"} hover:cursor-pointer hover:text-green`}>Cast</p>
                <p onClick={() => setCurrent("crew")} className={`${current === "crew" && "underline text-green"} hover:cursor-pointer hover:text-green`}>Crew</p>
                <p onClick={() => setCurrent("info")} className={`${current === "info" && "underline text-green"} hover:cursor-pointer hover:text-green`}>Details</p>
                <p onClick={() => setCurrent("genres")} className={`${current === "genres" && "underline text-green"} hover:cursor-pointer hover:text-green`}>Genres</p>
            </header>
            <Separator />
            {
                current === "cast" &&
                <CastComponent movieCredits={movieCredits}/>

            }
            {
                current === "crew" &&
                <CrewComponent crew={crew}/>
            }
            {
                current === "info" &&
                <DetailsComponent details={details} movieAltTitles={movieAltTitles}/>
            }
            {
                current === "genres" &&
                <GenreComponent details={details}/>
            }

        </section>
    );
};

export default MovieDetailsTabContent;