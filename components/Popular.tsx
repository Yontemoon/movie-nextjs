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
import { redirect } from "next/navigation";

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
            
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 10_000
                    })
                ]}
                className="relative mt-5"
            >
                <CarouselContent className="flex">
                    {populars.map((movie) => (
                        <CarouselItem key={movie.id} >
                            <div className="relative h-96 w-full hover:cursor-grab">
                               

                                    <Image
                                        alt={movie.title}
                                        fill
                                        src={`${imageUrl}${movie.backdrop_path}`}
                                        
                                        className="flex opacity-40 rounded-lg z-0 shadow-xl object-cover"
                                        sizes="(min-width: 1480px) 1176px, (min-width: 720px) calc(91.89vw - 166px), 455px" 
                                    />
                                

                                <div className="z-20 absolute inset-0 bottom-0 left-7 ">
                                    <h1 className="text-white">
                                        {movie.title}
                                    </h1>
                                    <GenreButtons movie={movie} />
                                    <Link href={`/movie/details/${movie.id}`}>
                                        <Button className="mt-3" >See Details</Button>
                                    </Link>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext
                    className="absolute bottom-2 right-0 m-4 scale-110 z-10"
                />
            </Carousel>
        </>
    );
};

export default Popular;