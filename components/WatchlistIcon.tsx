"use client"

import { useAccountInfoContext } from '@/provider/AccountInfoProvider';
import { useSession } from 'next-auth/react';
import React from 'react';
import { removeFromList, addToList } from '@/library/crud';
import { MovieDetailsType } from '@/library/modals';
import { useToast } from './ui/use-toast';
import Eye from './icons/Eye';
import { localFetch } from '@/library/db';

type TypeProps = {
    inWatchlist: boolean;
    setInWatchlist: React.Dispatch<React.SetStateAction<boolean>>
    details: MovieDetailsType;

}

const WatchlistIcon = ({ inWatchlist, setInWatchlist, details }: TypeProps) => {
    const session = useSession()
    const { watchlist, setWatchlist } = useAccountInfoContext()
    const { toast } = useToast()

    const handleWatchlistIcon = async () => {

        if (session.status === "authenticated") {
            if (inWatchlist) {
                // const request = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/watchlist/${session.data.user.id}/${session.data.user.sessionId}/${details.id}`, {
                //     method: 'DELETE',
                //     headers: {
                //         "Content-Type": "application/json",
                //     },
                // })

                const request = await localFetch(`/api/watchlist/${session.data.user.id}/${session.data.user.sessionId}/${details.id}`, 'DELETE')
                
                if (request.status === 200) {
                    // setInWatchlist(!inWatchlist)
                    if (watchlist) {
                        setWatchlist(removeFromList(watchlist, details.id))
                        setInWatchlist(false)

                    }
                    // mutate()
                    toast({ description: `Removed '${details.title}' in your watchlist.` })
                }
            } else {
               
                const request = await localFetch(`/api/watchlist/${session.data.user.id}/${session.data.user.sessionId}/${details.id}`, 'POST')
                
                if (request.status === 200) {
                    if (watchlist !== undefined && watchlist !== null) {
                        setWatchlist(addToList(watchlist, details))
                        setInWatchlist(true)
                    }
                    // setInWatchlist(!inWatchlist)
                    toast({ description: `Added '${details.title}' to your watchlist.` })
                }
            }


        } else {
            toast({
                title: "Log in Required",
                variant: "destructive",
                description: 'You must be logged in to add films to the your watchlist.'
            })
        }
    }

    return (
        <div onClick={handleWatchlistIcon} className='hover:cursor-pointer'>
            {inWatchlist ? <Eye watched={true} /> : <Eye />}
        </div>
    );
};

export default WatchlistIcon;