"use client"

import { useAccountInfoContext } from "@/provider/AccountInfoProvider";
import PosterCard from "@/components/PosterCard";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { MovieDetailsType } from "@/library/modals";


const WatchlistPage = () => {
    const session = useSession()
    const {watchlist, setWatchlist} = useAccountInfoContext()
    const [currentWatchlist, setCurrentWatchlist] = useState<MovieDetailsType[] | null>(null)

    useEffect(() => {
        if (session.status === "authenticated")
        setCurrentWatchlist(watchlist)
    },[session, watchlist])
    return (
        <>
            <p>You have {watchlist?.length} films in your favorite list.</p>
            <div className='flex flex-wrap gap-1'>
                {currentWatchlist?.map((movie) => (
                    <div key={movie.id}>
                        <PosterCard details={movie} width={125} height={192}  />
                    </div>
                ))}
            </div>
        </>
    );
};

export default WatchlistPage;