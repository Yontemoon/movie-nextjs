"use client"

import { createContext, useContext, useState, useEffect,useMemo } from "react";
import { useSession } from "next-auth/react";
import { MovieDetailsType, RatedType } from "@/library/modals";


type AccountContextType = {
    watchlist: MovieDetailsType[] | null;
    setWatchlist: React.Dispatch<React.SetStateAction<MovieDetailsType[] | null>>;
    favorites: MovieDetailsType[] | null;
    setFavorites: React.Dispatch<React.SetStateAction<MovieDetailsType[] | null>>;
    rated: RatedType[] | null;
    setRated: React.Dispatch<React.SetStateAction<RatedType[] | null>>


}

export const AccountInfoContext = createContext<AccountContextType>({} as AccountContextType);

export const useAccountInfoContext = () => {
    const {watchlist, setWatchlist, favorites, setFavorites, rated, setRated} = useContext(AccountInfoContext)
    return {watchlist, setWatchlist, favorites, setFavorites, rated, setRated}
}

const AccountInfoProvider = ({children}: {children: React.ReactNode}) => {

    const session = useSession()
    const [watchlist, setWatchlist] = useState<MovieDetailsType[] | null>(null)
    const [favorites, setFavorites] = useState<MovieDetailsType[] | null>(null)
    const [rated, setRated] = useState<RatedType[] | null>(null)

    useEffect(() => {
        const getWatchlist = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/watchlist/${session.data?.user.id}/${session.data?.user.sessionId}`, { cache: 'no-store' })
                
                // if (!response.ok) {
                //     throw new Error("Failed to fetch watchlist data");
                // }
                const data = await response.json();
                
                setWatchlist(data);
            } catch (error) {
                console.error("Error fetching watchlist:", error);
            }
        }

        const getFavorites = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/favorites/${session.data?.user.id}/${session.data?.user.sessionId}`, { cache: 'no-store' })
                // console.log("response", response)
                // if (!response.ok) {
                //     throw new Error("Failed to fetch watchlist data");
                // }
                const data = await response.json();
                
                setFavorites(data);
            } catch (error) {
                console.error("Error fetching watchlist:", error);
            }
        }

        const getRated = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/rating/${session.data?.user.sessionId}/get/${session.data?.user.id}`, { cache: 'no-store' })
                // console.log("response", response)
                // if (!response.ok) {
                //     throw new Error("Failed to fetch watchlist data");
                // }
                const data = await response.json();
                
                setRated(data);
            } catch (error) {
                console.error("Error fetching watchlist:", error);
            }
        }
        if (session.data?.user.id && session.data?.user.sessionId) {
            getWatchlist();
            getFavorites()
            getRated()
        }
    }, [session])

    const contextValue = useMemo(() => ({ watchlist, setWatchlist, favorites, setFavorites, rated, setRated }), [watchlist, setWatchlist, favorites, setFavorites, rated, setRated]);

    return (
        <AccountInfoContext.Provider value={contextValue}>
            {children}
        </AccountInfoContext.Provider>
    );
};

export default AccountInfoProvider;