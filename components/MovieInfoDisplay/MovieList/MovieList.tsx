import { Flex } from '@mantine/core';
import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { MovieInfo } from '@/types';
import { Pagination } from '@/UI';

export type MovieListProps = {
    movies: MovieInfo[],
    totalPages: number
};

export default function MovieList({ movies, totalPages } : MovieListProps) {
    const pages = totalPages > +(process.env.API_MAX_PAGES ?? Number.POSITIVE_INFINITY) ?
    +(process.env.API_MAX_PAGES ?? totalPages)
    :
    totalPages;
    return (
        <>
            <Flex gap={16} wrap="wrap">
            {
                movies.map((item) =>
                    <MovieCard {...item} key={item.id} />
                )
            }
            </Flex>
            <Flex justify="flex-end">
                <Pagination total={pages} />
            </Flex>
        </>
    );
}
