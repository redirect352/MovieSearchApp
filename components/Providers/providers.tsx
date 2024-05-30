'use client';

import React, { createContext } from 'react';
import { MovieGenre } from '@/types';

export const GenreContext = createContext<MovieGenre[]>([]);
export const SessionContext = createContext<string>('');

export function Providers({ children, sessionId, value } :
    React.PropsWithChildren<{ sessionId: string, value : MovieGenre[] }>) {
    return (
        <SessionContext.Provider value={sessionId}>
                <GenreContext.Provider value={value}>
                    {children}
                </GenreContext.Provider>
        </SessionContext.Provider>
    );
}
