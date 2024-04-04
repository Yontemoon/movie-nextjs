"use client"

import PosterCard from "./PosterCard";
import { MovieDetailsType } from "@/library/modals";

type MovieInfoPosterProps = {
    details: MovieDetailsType;
    className?: string
}

const MovieInfoPoster = ({ details, className }: MovieInfoPosterProps) => {
    return (
        <PosterCard width={300} height={600} details={details} className={`${className} `} pointerEvent={false}/>
    );
};

export default MovieInfoPoster;