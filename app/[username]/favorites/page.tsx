"use client"

import React from 'react';
import { useAccountInfoContext } from '@/provider/AccountInfoProvider';
import PosterCard from '@/components/PosterCard';

const FavoritesPage = () => {
    const { favorites, setFavorites } = useAccountInfoContext()
    console.log(favorites)
    return (
        <>
            <p>You have {favorites?.length} films in your favorite list.</p>
            <div className='flex flex-wrap gap-1'>
                {favorites?.map((movie) => (
                    <div key={movie.id}>
                        <PosterCard details={movie} width={256} height={384} sizes="(min-width: 540px) 256px, calc(54.55vw - 24px)" />
                    </div>
                ))}
            </div>
        </>
    );
};

export default FavoritesPage;