'use client';

import React, { createContext } from 'react';
import { MovieGenre } from '@/types';

export const GenreContext = createContext<MovieGenre[]>([]);

export function Providers({ children, value }:React.PropsWithChildren<{ value : MovieGenre[] }>) {
    return (
        <GenreContext.Provider value={value}>
            {children}
        </GenreContext.Provider>
    );
}
