import React, { useRef, useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuLabel } from './ui/dropdown-menu';
import Star from './icons/Star';
import StarRating from './StarRating';
import { MovieDetailsType } from '@/library/modals';


type PropTypes = {
    inRated: boolean;
    setInRated: React.Dispatch<React.SetStateAction<boolean>>
    details: MovieDetailsType
    ellipsisRef?: React.RefObject<HTMLDivElement>
    inWatchlist: boolean;
    setInWatchlist: React.Dispatch<React.SetStateAction<boolean>>
}


const RatedIcon = ({inRated, details, setInRated, ellipsisRef, inWatchlist, setInWatchlist}: PropTypes) => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger >
                {inRated ? <Star watched={true} /> : <Star />}
            </DropdownMenuTrigger>
            <DropdownMenuContent ref={ellipsisRef}>
                <DropdownMenuLabel>
                    <StarRating 
                        movieDetails={details} inRated={inRated} 
                        setInRated={setInRated} inWatchlist={inWatchlist} 
                        setInWatchlist={setInWatchlist}
                    />
                </DropdownMenuLabel>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default RatedIcon;