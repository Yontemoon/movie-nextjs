import { MovieCastDetails, MovieCrewDetails, MovieDetailsType } from "@/library/modals";
import { useState, useEffect } from "react";
import { useAccountInfoContext } from "@/provider/AccountInfoProvider";
import { useSession } from "next-auth/react";
import WatchlistIcon from "./WatchlistIcon";
import RatedIcon from "./RatedIcon";
import FavoriteIcon from "./FavoriteIcon";

type PropTypes = {
    MovieDetails: MovieCastDetails | MovieCrewDetails | MovieDetailsType
    ellipsisRef?: React.RefObject<HTMLDivElement>

}

const EditAccountIcons = ({MovieDetails, ellipsisRef}: PropTypes) => {

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
        <span className="flex flex-row">
            <WatchlistIcon inWatchlist={inWatchlist} setInWatchlist={setInWatchlist} details={MovieDetails} />
            <FavoriteIcon inFavorite={inFavorite} setInfavorite={setInfavorite} details={MovieDetails} />
            <RatedIcon
                inRated={inRated} setInRated={setInRated}
                details={MovieDetails} 
                inWatchlist={inWatchlist} setInWatchlist={setInWatchlist}
                ellipsisRef={ellipsisRef}
            />
        </span>
    );
};

export default EditAccountIcons