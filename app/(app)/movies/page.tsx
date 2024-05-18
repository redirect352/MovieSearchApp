'use client';

import { Flex, Pagination, Title } from '@mantine/core';
import { useState } from 'react';
import classes from './styles.module.css';
import { MovieCard, SortBar, MoviesFilterBar, NoMoviesFound } from '@/components';
// import SearchForm from '@/components/SearchForm';
const defProps = {
	title: 'The Green Mile',
	releaseYear: 1999,
	genres: ['Drama', 'Crime', 'Fantasy'],
	rating: 9.3,
	viewsCound: '2.9M',
	image: '/test.webp',
};
const moviesDef : (typeof defProps)[] = [defProps, { ...defProps, image: '' }];

export default function MoviesPage() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [movies, setMovies] = useState(moviesDef);
	return (
		<Flex className={classes.moviesContainer} direction="column">
			<Flex justify="space-between" align="center">
				<Title order={1} w="50%" ta="left">Movies</Title>
				<div className={classes.headerAdjustBlock}></div>
			</Flex>
			<Flex direction="column" gap={24}>
				<MoviesFilterBar />
				<SortBar />
			</Flex>
			{
				movies.length === 0 ?
				<NoMoviesFound />
				:
				<>
					<Flex gap={16} wrap="wrap">
					{
						movies.map((item, index) =>
							<MovieCard {...item} key={index} />
						)
					}
					</Flex>
					<Flex justify="flex-end">
						<Pagination total={3} />
					</Flex>
				</>
			}
		</Flex>
	);
}
