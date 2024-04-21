"use client"

import { MovieDetailsType } from "@/library/modals";
import Link from "next/link";

type PropTypes = {
    details: MovieDetailsType
}
const GenreComponent = ({details}: PropTypes) => {
    return (
        <div className="grid grid-cols-3 align-baseline mb-3 my-5">
            <span className="col-span-1">
                <p className="flex uppercase">Genre<span className="dots"></span></p>
            </span>
            <span className="col-span-2 gap-1 flex flex-wrap">
                {details.genres.map((genre) => (
                    <Link href={`/discover?genre=${genre.id}`} key={genre.id} className="text-box ">
                        {genre.name}
                    </Link>
                ))}
            </span>
        </div>
    );
};

export default GenreComponent;