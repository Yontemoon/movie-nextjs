"use client"

import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const StarRating = () => {

    const [rating, setRating] = useState(0)

    const handleRating = (rate: number) => {
        console.log(rate*2)
        setRating(rate*2)
    }

  const onPointerMove = (value: number, index: number) => console.log(value, index)

    return (
        <div >
            <Rating
                onClick={handleRating}
                onPointerMove={onPointerMove}
                SVGstyle={{ display: 'inline-block' }} 
                iconsCount={5}
                transition={true}
                allowFraction={true}
            />
            
        </div>
    );
};

export default StarRating;