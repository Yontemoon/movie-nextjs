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
        <>
            <p>You have {currentRatedList?.length} films in your favorite list.</p>
            <div className='flex flex-wrap gap-1'>
                {currentRatedList?.map((movie) => (
                    <div key={movie.id}>
                        <PosterCard details={movie} width={125} height={192}  />
                        <p>{movie.rating}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default RatingsPage;