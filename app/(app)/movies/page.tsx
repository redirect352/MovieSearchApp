import { Flex, Title } from '@mantine/core';
import classes from './styles.module.css';
import MoviesFilterBar from '@/components/MoviesFilterBar/MoviesFilterBar';
import NoMoviesFound from '@/components/NoMoviesFound/NoMoviesFound';
import SortBar from '@/components/SortBar';
// import SearchForm from '@/components/SearchForm';

export default async function MoviesPage() {
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
			<NoMoviesFound />
		</Flex>
	);
}
