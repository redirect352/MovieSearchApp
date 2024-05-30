import { Flex, Title } from '@mantine/core';
import { Suspense } from 'react';
import { PageProps } from '@/.next/types/app/(app)/layout';
import { MovieList, NoMoviesFound, NoRatedMovies, SearchForm } from '@/components';
import { createNewGuestSession, getRatedMovies } from '@/services/apiService';
import classes from './styles.module.scss';

export default async function Page({ searchParams } :PageProps) {
	const sessionId = await createNewGuestSession();
	const { movieIds } = await getRatedMovies(searchParams, sessionId);
	return (
		<>
			{
				movieIds.size === 0 ?
				<NoRatedMovies />
				:
				<Flex className={classes.moviesContainer} direction="column">
					<Flex justify="space-between" align="center">
						<Title order={1} w="50%" ta="left">Rated Movies</Title>
						<div className={classes.headerAdjustBlock}></div>
					</Flex>
					<Suspense>
						<Flex direction="column" gap={24} align="end">
							<SearchForm />
						</Flex>
					</Suspense>
					<Suspense>
						<MovieList
							searchParams={searchParams}
							noDataElement={<NoMoviesFound />}
							disableNotRated
							/>
					</Suspense>
				</Flex>
			}
		</>
	);
}
