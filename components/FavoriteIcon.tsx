"use client"

import React from 'react';
import Heart from './icons/Heart';
import { useSession } from 'next-auth/react';
import { useToast } from './ui/use-toast';
import { useAccountInfoContext } from '@/provider/AccountInfoProvider';
import { removeFromList, addToList } from '@/library/crud';
import { MovieDetailsType } from '@/library/modals';
import { localFetch } from '@/library/db';

type PropTypes = {
    inFavorite: boolean;
    setInfavorite: React.Dispatch<React.SetStateAction<boolean>>
    details: MovieDetailsType
}

const FavoriteIcon = ({inFavorite, setInfavorite, details}: PropTypes) => {
    const session = useSession()
    const {toast} = useToast()
    const {favorites, setFavorites} = useAccountInfoContext()

    const handleFavoriteIcon = async () => {
        if (session.status === "authenticated") {
            if (inFavorite) {

                const request = await localFetch(`/api/favorites/${session.data.user.id}/${session.data.user.sessionId}/${details.id}`, "DELETE")
                if (request.status === 200) {

                    if (favorites) {
                        setFavorites(removeFromList(favorites, details.id))
                        setInfavorite(false)

                    }
                    // mutate()
                    toast({ description: `Removed '${details.title}' in your favorites.` })
                }
            } else {

                const request = await localFetch(`/api/favorites/${session.data.user.id}/${session.data.user.sessionId}/${details.id}`, 'POST')
                if (request.status === 200) {
                    if (favorites !== undefined && favorites !== null) {
                        setFavorites(addToList(favorites, details))
                        setInfavorite(true)
                    }

                    toast({ description: `Added '${details.title}' to your favorites.` })
                }
            }
        } else {
            toast({
                title: "Log in Required",
                variant: "destructive",
                description: 'You must be logged in to add films to the your favorite list.'
            })
        }
    }

    return (
        <div onClick={handleFavoriteIcon} className='hover:cursor-pointer'>
            {inFavorite ? <Heart watched={true} /> : <Heart />}
        </div>
    );
};

export default FavoriteIcon;