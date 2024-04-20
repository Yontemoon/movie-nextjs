"use client"

import PosterCard from "./PosterCard";
import { MovieDetailsType } from "@/library/modals";
import Image from "next/image";
import DefaultPoster from "./DefaultPoster";
import { imageUrl } from "@/library/url";
import { useState } from "react";

type MovieInfoPosterProps = {
    details: MovieDetailsType;
    className?: string
}

const MovieInfoPoster = ({ details, className }: MovieInfoPosterProps) => {

    const [isLoading, setIsLoading] = useState(true)


    return (
        <>
            {details.poster_path === null ?
                <DefaultPoster movieTitle={`${details.title}`} />
                :
                <Image
                    src={`${imageUrl}${details.poster_path}`}
                    alt={`${details.id}`}
                    // fill
                    // objectFit='true'
                    width={300}
                    height={600}


                    className=
                    {`
                                w-full h-full  transition-all  
                                  duration-300 cursor-pointer 
                                  rounded-xl
                                  border border-gray-500 shadow-xl inline-block
                                ${className} 
                                
                                ${isLoading ? " blur-lg " : " blur-0 "}
                                z-0
                                
                                
                                
                            `}
                    onLoad={() => setIsLoading(false)}

                    priority
                    quality={50}

                />

            }
        </>
    );
};

export default MovieInfoPoster;