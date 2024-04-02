import React from 'react';

type PropType = {
    className: string
}

const PosterFallback = ({className}: PropType) => {
    return (
        <div className={`${className}`}>
            Loading
        </div>
    );
};

export default PosterFallback;