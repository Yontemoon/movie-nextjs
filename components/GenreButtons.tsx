"use client"

import { getGenreName } from "@/library/genres";
import { Button } from "./ui/button";
import { MovieDetailsType } from "@/library/modals";
import { redirect } from "next/navigation";
import Link from "next/link";


const GenreButtons = ({movie}: {movie: MovieDetailsType}) => {



    return (
        <div className="gap-2 flex z-20">
            {movie.genre_ids.slice(0, 3).map((genreId, index) => (
                <Link key={index} href={`/discover?genre=${genreId}&page=1`}>
                    <Button variant="outline" size="sm"  className="z-40">{getGenreName(genreId)}</Button>
                </Link>
            ))}
        </div>
    );
};

export default GenreButtons;