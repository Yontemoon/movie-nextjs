"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { imageUrl } from "@/library/url";
import { CastDetails } from "@/library/modals";

import Link from "next/link";
import { initials } from "@/utils/format";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"


type AvatarCarousalProps = {
    credits: CastDetails[]
}

const AvatarCarousal = ({ credits }: AvatarCarousalProps) => {
    return (
        <>
            <Carousel className="">
                <div className='flex justify-between mx-3'>
                    <h3>Cast</h3>
                    <div className='gap-y-3'>
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </div>
                <CarouselContent>
                    {credits.map((credit) => (
                        <CarouselItem className='basis-1/8 ' key={credit.id}>
                            <Link href={`/movie/details/${credit.id}`}>
                                <Avatar>
                                    <AvatarImage src={`${imageUrl}${credit.profile_path}`} className="border-2 rounded-full border-opacity-0 hover:border-stone-800 object-cover" />
                                    <AvatarFallback className=" border-2 rounded-full border-opacity-0 hover:border-black">{initials(credit.name)}</AvatarFallback>
                                </Avatar>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>
    );
};

export default AvatarCarousal;