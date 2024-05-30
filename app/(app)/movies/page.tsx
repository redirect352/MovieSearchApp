import { Flex, Title } from '@mantine/core';
import { Suspense } from 'react';
import classes from './styles.module.css';
import { SortBar, MoviesFilterBar, MovieList, NoMoviesFound } from '@/components';

type PageProps = {
	searchParams: Record<string, string> | URLSearchParams,
};

export default async function MoviesPage({ searchParams }: PageProps) {
	return (
		<Flex className={classes.moviesContainer} direction="column">
			<Flex justify="space-between" align="center">
				<Title order={1} w="50%" ta="left">Movies</Title>
				<div className={classes.headerAdjustBlock}></div>
			</Flex>
			<Suspense>
				<Flex direction="column" gap={24}>
					<MoviesFilterBar />
					<SortBar />
				</Flex>
			</Suspense>
			<Suspense>
				<MovieList searchParams={searchParams} noDataElement={<NoMoviesFound />} />
			</Suspense>
		</Flex>
	);
}
