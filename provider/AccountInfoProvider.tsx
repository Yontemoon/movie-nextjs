"use client"

import { createContext, useContext, useState, useEffect,useMemo } from "react";
import { useSession } from "next-auth/react";
import { MovieDetailsType } from "@/library/modals";


type AccountContextType = {
    watchlist: MovieDetailsType[] | null;
    setWatchlist: React.Dispatch<React.SetStateAction<MovieDetailsType[] | null>>;
}

export const AccountInfoContext = createContext<AccountContextType>({} as AccountContextType);

export const useAccountInfoContext = () => {
    const {watchlist, setWatchlist} = useContext(AccountInfoContext)
    return {watchlist, setWatchlist}
}

const AccountInfoProvider = ({children}: {children: React.ReactNode}) => {

    const session = useSession()
    const [watchlist, setWatchlist] = useState<MovieDetailsType[] | null>(null)

    useEffect(() => {
        const getWatchlist = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/watchlist/${session.data?.user.id}/${session.data?.user.sessionId}`)
                console.log("response", response)
                // if (!response.ok) {
                //     throw new Error("Failed to fetch watchlist data");
                // }
                const data = await response.json();
                console.log("WATCHLIST IN PROVIDER", data)
                setWatchlist(data);
            } catch (error) {
                console.error("Error fetching watchlist:", error);
            }
        }
        if (session.data?.user.id && session.data?.user.sessionId) {
            getWatchlist();
        }
    }, [session])

    const contextValue = useMemo(() => ({ watchlist, setWatchlist }), [watchlist, setWatchlist]);

    return (
        <AccountInfoContext.Provider value={contextValue}>
            {children}
        </AccountInfoContext.Provider>
    );
};

export default AccountInfoProvider;