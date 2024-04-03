import React from 'react';
import { Metadata } from 'next';

type PropType = {
    children: React.ReactNode
}


const MovieDetailLayout = ({children}: PropType) => {
    return (
        <>
            {children}
        </>
    );
};

export default MovieDetailLayout;