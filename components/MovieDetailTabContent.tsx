"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AlternativeMovieTitlesType, MovieDetailsType, PersonCreditDetailsType } from "@/library/modals";
import { Separator } from "./ui/separator";
import { sortMovieCrewInfo } from "@/library/sortCrewInfo";
import { numberWithCommas } from "@/utils/format";

type PropType = {
    movieId: string
    details: MovieDetailsType
    movieCredits: PersonCreditDetailsType
    movieAltTitles: AlternativeMovieTitlesType
}

const MovieDetailsTabContent = ({ movieId, details, movieCredits, movieAltTitles }: PropType) => {
    
    const pathname = usePathname()
    const crew = sortMovieCrewInfo(movieCredits.crew)
    // console.log(details)

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
                <div className="flex flex-wrap gap-1 py-3">

                    {movieCredits.cast.map((cast) => (
                        <Link href={`/person/${cast.id}`} key={cast.id} 
                            className="text-box">
                            {cast.name}
                        </Link>
                    ))}
                </div>

            }
            {
                current === "crew" &&
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
                                        className= {
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
            }
            {
                current === "info" &&
                <ul className="grid grid-cols-3">
                    <li className="">
                        <p className="col-span-1">Studios</p>
                        {details.production_companies.map((company) => (
                            <p key={company.id}>{company.name}</p>
                        ))}
                    </li>
                    <li>
                        <p>Primary Language</p>
                        <div>
                            {details.spoken_languages.map((language) =>(
                                <Link  href={`/discover?country=${language.iso_639_1}`} key={language.iso_639_1} className="">
                                    {language.english_name}
                                </Link>
                            ))}
                        </div>
                    </li>
                    <li>
                        <p>Alternative Titles</p>
                        <div>
                            {movieAltTitles.titles.map((title, index) => (
                                <p key={index}>{title.title}</p>
                            ))}
                        </div>
                    </li>
                    {
                        details.budget && 
                        <li>
                            <p>Estimated Budget</p>
                            <p>${numberWithCommas(details.budget)}</p>    
                        </li>
                    }
                     {
                        details.revenue && 
                        <li>
                            <p>Box Office</p>
                            <p>${numberWithCommas(details.revenue)}</p>    
                        </li>
                    }
                </ul>
            }
            {
                current === "genres" &&
                <div className="grid grid-cols-3 align-baseline mb-3 my-5">
                    <span className="col-span-1">
                        <p className="flex uppercase">Genre<span className="dots"></span></p>
                    </span>
                    <span className="col-span-2 gap-1 flex">
                        {details.genres.map((genre) => (
                            <Link href={`/discover?genre=${genre.id}`} key={genre.id} className="text-box ">
                                {genre.name}
                            </Link>
                        ))}
                    </span>
                </div>
            }

        </section>
    );
};

export default MovieDetailsTabContent;