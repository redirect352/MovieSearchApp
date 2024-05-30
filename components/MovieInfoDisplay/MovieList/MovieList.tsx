import { Flex } from '@mantine/core';
import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { MovieInfo } from '@/types';
import { Pagination } from '@/UI';
import { createNewGuestSession, getMovies, getRatedMovies } from '@/services/apiService';

export type MovieListProps = {
    movies: MovieInfo[],
    totalPages: number,
    ratedList: Map<number, number>
};
type PageProps = {
	searchParams: Record<string, string> | URLSearchParams,
    noDataElement: React.ReactNode,
    disableNotRated?: boolean
};

export default async function MovieList(
    { searchParams, noDataElement, disableNotRated = false } : PageProps) {
    const sessionId = await createNewGuestSession();
	const { pages: allMoviePages, movies } = await getMovies(searchParams);
	const { movieIds, movies: ratedMovies, pages: ratedPages } =
        await getRatedMovies(searchParams, sessionId);
    const totalPages = disableNotRated ? ratedPages : allMoviePages;
    const pagesCount = totalPages > +(process.env.API_MAX_PAGES ?? Number.POSITIVE_INFINITY) ?
    +(process.env.API_MAX_PAGES ?? totalPages)
    :
    totalPages;
    const resBuffer = disableNotRated ? ratedMovies : movies;
    if (resBuffer.length === 0) {
        return <>{noDataElement}</>;
    }
    return (
        <>
            <Flex gap={16} wrap="wrap">
            {
                resBuffer.map((item) =>
                    <MovieCard {...item} currentRating={movieIds.get(item.id)} key={item.id} />
                )
            }
            </Flex>
            <Flex justify="flex-end">
                <Pagination total={pagesCount} />
            </Flex>
        </>
    );
}
