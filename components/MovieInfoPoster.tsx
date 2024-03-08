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
        <>
            {/* <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger> */}
                        {/* <DialogTrigger> */}
                        
                            <PosterCard width={300} height={600}details={details} className={`${className} `} pointerEvent={false}/>
                        
                        
                        {/* </DialogTrigger> */}
                    {/* </TooltipTrigger>
                    <TooltipContent>
                        <p>Click to enlarge.</p>
                    </TooltipContent> */}
                    {/* <DialogContent>

                        <PosterCard width={1000} height={1000} details={details} />
                        <p>This is a dialog box</p>
                    </DialogContent> */}
                {/* </Tooltip>
            </TooltipProvider> */}
        </>
    );
};

export default MovieInfoPoster;