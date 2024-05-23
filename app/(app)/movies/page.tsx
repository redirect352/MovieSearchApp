import { Flex, Title } from '@mantine/core';
import classes from './styles.module.css';
import { SortBar, MoviesFilterBar, NoMoviesFound, MovieList } from '@/components';
import { getMovieGenresList, getMovies } from '@/services/apiService';

type PageProps = {
	searchParams: Record<string, string> | URLSearchParams,
};

export default async function MoviesPage({ searchParams }: PageProps) {
	const { pages, movies } = await getMovies(searchParams);
	const genres = await getMovieGenresList();
	return (
		<Flex className={classes.moviesContainer} direction="column">
			<Flex justify="space-between" align="center">
				<Title order={1} w="50%" ta="left">Movies</Title>
				<div className={classes.headerAdjustBlock}></div>
			</Flex>
			<Flex direction="column" gap={24}>
				<MoviesFilterBar genres={genres} />
				<SortBar />
			</Flex>
			{
				movies.length === 0 ?
				<NoMoviesFound />
				:
				<MovieList
					movies={movies}
					totalPages={pages}
					/>
			}
		</Flex>
	);
}
