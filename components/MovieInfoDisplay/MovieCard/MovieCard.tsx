import React from 'react';
import { Flex, Paper, Text } from '@mantine/core';
import classes from './styles.module.scss';
import { StarButton, ImageWithFallback } from '@/UI';
import MovieDescription from '../MovieDescription/MovieDescription';

export type MovieCardProps = {
	title : string,
	releaseYear: number | string,
	genres: string[],
	rating: number,
	viewsCound: number | string,
	image?: string,
};

export default function MovieCard(props : MovieCardProps) {
	const { title, releaseYear, genres, rating, viewsCound, image } = props;

	return (
		<Paper className={classes.cardBox}>
			<Flex gap={8} justify="space-between">
				<Flex className={classes.mainInfo}>
					<ImageWithFallback
						width={119}
						height={170}
						src={image ?? ''}
						alt="" />
					<Flex gap={16} direction="column" justify="space-between">
						<MovieDescription
							title={title}
							rating={rating}
							releaseYear={releaseYear}
							viewsCound={viewsCound}
							/>
						<Flex gap={12}>
							<Text c="dimmed">Genres</Text>
							<Text>{genres.join(', ')}</Text>
						</Flex>
					</Flex>
				</Flex>
				<StarButton buttonActive />
			</Flex>
		</Paper>
	);
}
