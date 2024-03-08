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
        <div
        className='relative h-[500px] w-screen'
        style={{ maskImage: 'linear-gradient(to bottom, black, transparent)' }}
    >
        <Image
            alt={details.original_title}
            src={`${imageUrl}${details.backdrop_path}`}
            fill
            priority
            className={`absolute inset-0 w-full object-cover transition-all duration-300
                ${isLoading ? "blur-lg" : "blur-0"}
            `}
            placeholder='blur'
            blurDataURL={`${imageUrl}${details.backdrop_path}`} 
            sizes="100vw"
            onLoadingComplete={() => setIsLoading(false)}
        // quality={60}
        />
    </div>
    );
};

export default MovieInfoBackdrop;