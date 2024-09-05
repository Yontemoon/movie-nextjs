"use client"

import { useState } from "react";
import Image from "next/image";
import { imageUrl } from "@/library/url";
import { MovieDetailsType } from "@/library/modals";

type PropTypes = {
    details: MovieDetailsType
}

const MovieInfoBackdrop = ({details}: PropTypes) => {

    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className='relative h-[400px] w-full overflow-x-hidden'>
            <div
                className="absolute inset-0 overflow-hidden"
                style={{
                    maskImage: 'linear-gradient(to bottom, black, transparent)'
                }}
            >
                <Image
                    alt={details.original_title}
                    src={`${imageUrl}${details.backdrop_path}`}
                    fill
                    priority
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 object-center ${isLoading ? "blur-lg" : "blur-0"}`}
                    sizes="(min-width: 1480px) 1176px, calc(94.83vw - 208px)" 
                    placeholder='blur'
                    objectFit="cover"
                    layout="fill"
                    blurDataURL={`${imageUrl}${details.backdrop_path}`} 
                    onLoadingComplete={() => setIsLoading(false)}
                />
                <div className="absolute inset-0">
                    <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-backgroundColor to-transparent" />
                    <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-backgroundColor to-transparent" />
                </div>
            </div>
        </div>
    );
};

export default MovieInfoBackdrop;
