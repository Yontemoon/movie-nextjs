"use client"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import PosterCard from "./PosterCard";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
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