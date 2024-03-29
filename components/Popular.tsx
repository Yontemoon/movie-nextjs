"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "./ui/button";
import { getGenreName } from "@/library/genres";
import GenreButtons from "./GenreButtons";


import { MovieDetailsType } from "@/library/modals";
import Image from "next/image";
import { imageUrl } from "@/library/url";
import Link from "next/link";

type PopularPropTypes = {
    popular: MovieDetailsType[]
}


const Popular = ({ popular }: PopularPropTypes) => {

    const populars = popular.slice(0, 5)

    return (
        <>
            <h1>Popular</h1>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 10_000
                    })
                ]}
                className="relative"
            >
                <CarouselContent className="flex">
                    {populars.map((movie) => (
                        <CarouselItem key={movie.id} >
                            <div className="relative h-96 w-full hover:cursor-grab">
                                <Link href={`/movie/details/${movie.id}`} className="z-0">

                                    <Image
                                        alt={movie.title}
                                        fill
                                        src={`${imageUrl}${movie.backdrop_path}`}
                                        
                                        className="flex opacity-85 rounded-lg z-0 shadow-xl object-cover"
                                        sizes="(min-width: 1480px) 1336px, (min-width: 400px) calc(94.34vw - 41px), calc(15vw + 259px)"
                                    />
                                </Link>

                                <div className="z-20 absolute inset-0 bottom-0 left-7 ">
                                    <h1 className="text-white">
                                        {movie.title}
                                    </h1>
                                    <GenreButtons movie={movie} />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext
                    className="absolute bottom-2 right-0 m-4 scale-110"
                />
            </Carousel>
        </>
    );
};

export default Popular;