import React from 'react';
import { Flex, Paper, Text } from '@mantine/core';
import classes from './styles.module.scss';
import { StarButton, ImageWithFallback } from '@/UI';
import MovieHeader from '../MovieHeader/MovieHeader';
import { MovieInfo } from '@/types';

export type MovieCardProps = {

} & MovieInfo;

export default function MovieCard(props : MovieCardProps) {
	const { title, releaseYear, genres, rating, viewsCount, image, id } = props;

	return (
		<Paper className={classes.cardBox}>
			<Flex gap={8} justify="space-between">
				<Flex className={classes.mainInfo}>
					<ImageWithFallback
						width={119}
						height={170}
						src={image ?? ''}
						alt=""
						style={{ flexShrink: 0 }}
						/>
					<Flex gap={16} direction="column" justify="space-between">
						<MovieHeader
							title={title}
							rating={rating}
							releaseYear={releaseYear}
							viewsCount={viewsCount}
							id={id}
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
