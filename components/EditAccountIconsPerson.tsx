"use client"

import EditAccountIcons from "./EditAccountIcons";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useAccountInfoContext } from "@/provider/AccountInfoProvider";
import { MovieDetailsType } from "@/library/modals";

type PropTypes = {
    MovieDetails: MovieDetailsType
}

const EditAccountIconsPerson = ({ MovieDetails }: PropTypes) => {


    const [inWatchlist, setInWatchlist] = useState(false)
    const [inFavorite, setInfavorite] = useState(false)
    const [inRated, setInRated] = useState(false)

    const { watchlist, favorites, rated } = useAccountInfoContext()

    const session = useSession()

    useEffect(() => {

        if (session.status === 'authenticated' && watchlist && favorites && rated) {
            setInWatchlist(watchlist?.some((movie) => movie.id === MovieDetails.id));
            setInfavorite(favorites?.some((movie) => movie.id === MovieDetails.id))
            setInRated(rated?.some((movie) => movie.id === MovieDetails.id))
        }
    }, [session.status, watchlist, MovieDetails.id, favorites, rated])

    return (
        <EditAccountIcons
            MovieDetails={MovieDetails}
            // ellipsisRef={ellipsisRef}
            inWatchlist={inWatchlist}
            setInWatchlist={setInWatchlist}
            inFavorite={inFavorite}
            setInfavorite={setInfavorite}
            setInRated={setInRated}
            inRated={inRated}
        />
    );
};

export default EditAccountIconsPerson;