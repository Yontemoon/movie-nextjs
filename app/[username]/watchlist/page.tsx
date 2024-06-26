"use client"

import { useAccountInfoContext } from "@/provider/AccountInfoProvider";
import PosterCard from "@/components/PosterCard";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { MovieDetailsType } from "@/library/modals";


const WatchlistPage = () => {
    const session = useSession()
    const {watchlist} = useAccountInfoContext()
    const [currentWatchlist, setCurrentWatchlist] = useState<MovieDetailsType[] | null>(null)
    
    useEffect(() => {
        if (session.status === "authenticated") {
            setCurrentWatchlist(watchlist)
        }
    },[session, watchlist])


    // useEffect(() => {
    //     console.log("it passing here");
    //     if (session.status === "authenticated") {
    //         setCurrentWatchlist(watchlist)

    //     }
    // })
    return (
        <section className="gap-2">
            <h1 className="overflow-hidden whitespace-nowrap">Your Watchlist</h1>
            <p className="overflow-hidden whitespace-nowrap">You have {watchlist?.length} films in your favorite list.</p>
            <div className='grid xl:grid-cols-8 lg:grid-cols-6 grid-cols-4 gap-1 min-w-[500px] min-h-screen'>
                {currentWatchlist?.map((movie) => (
                    <div key={movie.id} className="w-[129px] h-[196px]">
                        <PosterCard details={movie} width={125} height={192}  />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WatchlistPage;