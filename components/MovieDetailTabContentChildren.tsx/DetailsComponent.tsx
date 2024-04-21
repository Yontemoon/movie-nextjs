"use client"

import { AlternativeMovieTitlesType, MovieDetailsType } from "@/library/modals";
import Link from "next/link";
import { numberWithCommas } from "@/utils/format";
import isoToCountry from "@/utils/convertIsoToCountry";

type PropTypes = {
    details: MovieDetailsType
    movieAltTitles: AlternativeMovieTitlesType
}

const DetailsComponent = ({ details, movieAltTitles }: PropTypes) => {

    console.log(details.spoken_languages)
    const detailsList = [
        {
            label: "Studios",
            content: details.production_companies.map((company) => (
                <p key={company.id} className="text-box">{company.name}</p>
            )),
        },
        {
            label: "Primary Language",
            content: details.spoken_languages.map((language) => {
                const country = isoToCountry(language)
                
                return (
                    <Link href={`/discover?country=${country?.iso_3166_1}`} key={language.iso_639_1} className="text-box">
                        {language.english_name}
                    </Link>
                )

            }),
        },
        {
            label: "Alternative Titles",
            content: movieAltTitles.titles.map((title, index) => (
                <p key={index} className="text-box">{title.title}</p>
            )),
        },
        {
            label: "Estimated Budget",
            content: details.budget && <p className="text-box">${numberWithCommas(details.budget)}</p>,
        },
        {
            label: "Box Office",
            content: details.revenue && <p className="text-box">${numberWithCommas(details.revenue)}</p>,
        },
    ];
    return (
        <ul className="my-5">
            {detailsList.map(({ label, content }, index) => (
                <li key={index} className="grid grid-cols-3 align-baseline mb-3">
                    <span>
                        <p className="col-span-1 flex">
                            {label}
                            <span className="dots" />
                        </p>
                    </span>
                    <span className="col-span-2 gap-1 flex flex-wrap">{content}</span>
                </li>
            ))}
        </ul>
    );
};

export default DetailsComponent;