"use client"

import { MovieCastDetails, MovieCrewDetails, MovieDetailsType } from "@/library/modals";
import WatchlistIcon from "./WatchlistIcon";
import RatedIcon from "./RatedIcon";
import FavoriteIcon from "./FavoriteIcon";

type PropTypes = {
    MovieDetails: MovieCastDetails | MovieCrewDetails | MovieDetailsType;
    ellipsisRef?: React.RefObject<HTMLDivElement>;
    inWatchlist: boolean;
    setInWatchlist: React.Dispatch<React.SetStateAction<boolean>>;
    inFavorite: boolean;
    setInfavorite: React.Dispatch<React.SetStateAction<boolean>>;
    inRated: boolean;
    setInRated: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditAccountIcons = ({MovieDetails, ellipsisRef, inWatchlist, setInWatchlist, inFavorite, setInfavorite, inRated, setInRated}: PropTypes) => {

    // const [inWatchlist, setInWatchlist] = useState(false)
    // const [inFavorite, setInfavorite] = useState(false)
    // const [inRated, setInRated] = useState(false)

    // const { watchlist, favorites, rated } = useAccountInfoContext()

    // const session = useSession()

    // useEffect(() => {
        
    //     if (session.status === 'authenticated' && watchlist && favorites && rated) {
    //         setInWatchlist(watchlist?.some((movie) => movie.id === MovieDetails.id));
    //         setInfavorite(favorites?.some((movie) => movie.id === MovieDetails.id))
    //         setInRated(rated?.some((movie) => movie.id === MovieDetails.id))
    //     }
    // }, [])
    

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