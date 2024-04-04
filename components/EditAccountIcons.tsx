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