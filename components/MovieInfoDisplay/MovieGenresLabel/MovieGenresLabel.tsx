'use client';

import React, { useContext } from 'react';
import { GenreContext } from '@/components/Providers/providers';

export default function MovieGenresLabel({ genres } : { genres: number[] }) {
    const genresDef = useContext(GenreContext);
    const list = genres.map(id => genresDef.find(item => item.id === id)?.name);
    return (
        <>
            {list.join(', ')}
        </>
    );
}
