"use client"

import React from 'react';
import { useAccountInfoContext } from '@/provider/AccountInfoProvider';
import PosterCard from '@/components/PosterCard';

const FavoritesPage = () => {
    const { favorites, setFavorites } = useAccountInfoContext()
    console.log(favorites)
    return (
        <section>
            <h1>Your Favorites</h1>
            <p>You have {favorites?.length} films in your favorite list.</p>
            <div className='grid xl:grid-cols-8 lg:grid-cols-6 grid-cols-4 gap-1 min-w-[500px] min-h-screen'>
                {favorites?.map((movie) => (
                    <div className="w-[129px] h-[196px]" key={movie.id}>
                        <PosterCard details={movie} width={125} height={192} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FavoritesPage;