import { Flex, Title } from '@mantine/core';
import classes from './styles.module.css';
import MoviesFilterBar from '@/components/MoviesFilterBar/MoviesFilterBar';

export default async function MoviesPage() {
	return (
		<Flex className={classes.moviesContainer} direction="column">
			<Flex justify="space-between" align="center">
				<Title size={32} w="50%" ta="left">Movies</Title>
				<div className={classes.headerAdjustBlock}></div>
			</Flex>
			<MoviesFilterBar />
		</Flex>
	);
}
