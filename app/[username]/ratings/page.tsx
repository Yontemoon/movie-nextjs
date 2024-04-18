"use client"

import { useAccountInfoContext } from "@/provider/AccountInfoProvider";
import PosterCard from "@/components/PosterCard";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { MovieDetailsType, RatedType } from "@/library/modals";


const RatingsPage = () => {
    const session = useSession()
    const {rated, setRated} = useAccountInfoContext()
    const [currentRatedList, setCurrentRatedList] = useState<RatedType[] | null>(null)

    useEffect(() => {
        if (session.status === "authenticated")
        setCurrentRatedList(rated)
    },[session, rated])
    return (
        <section className="gap-y-2">
            <h1>Your Ratings</h1>
            <p>You have {currentRatedList?.length} films in your favorite list.</p>
            <div className='grid xl:grid-cols-8 lg:grid-cols-6 grid-cols-4 gap-1 min-w-[500px] min-h-screen'>
                {currentRatedList?.map((movie) => (
                    <div key={movie.id}>
                        <div className="w-[129px] h-[196px]">
                            <PosterCard details={movie} width={125} height={192} dimPoster={false}/>
                        </div>
                        <p>{movie.rating}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RatingsPage;