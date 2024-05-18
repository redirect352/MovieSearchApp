'use client';

import { Flex, Paper, Text } from '@mantine/core';
import React from 'react';
import { MovieCardProps } from '../MovieCard/MovieCard';
import MovieDescription from '../MovieDescription/MovieDescription';
import { ImageWithFallback, StarButton } from '@/UI';

type MovieFullInfoCardProps = {
	duration: string,
	premiereDate: string,
	budget: number | string,
	boxOffice: number | string,
} & MovieCardProps;

const numberFormater = new Intl.NumberFormat('en-US');

export default function MovieFullInfoCard(props : MovieFullInfoCardProps) {
	const { title, releaseYear, genres, rating, viewsCound, image } = props;
	const { duration, premiereDate, boxOffice, budget } = props;
	return (
		<Paper p={24}>
			<Flex gap={8} justify="space-between">
				<Flex gap={16} flex="1">
					<ImageWithFallback
						width={250}
						height={352}
						src={image ?? ''}
						alt="" />
					<Flex gap={16} direction="column" justify="space-between">
						<MovieDescription
							title={title}
							rating={rating}
							releaseYear={releaseYear}
							viewsCound={viewsCound}
							/>
						<Flex gap={20}>
							<Flex gap={12} direction="column" align="flex-start">
								<Text c="dimmed">Duration</Text>
								<Text c="dimmed">Premiere</Text>
								<Text c="dimmed">Budget</Text>
								<Text c="dimmed">Cross worldwide</Text>
								<Text c="dimmed">Genres</Text>
							</Flex>
							<Flex gap={12} direction="column" align="flex-start">
								<Text>{duration}</Text>
								<Text>{premiereDate}</Text>
								<Text>
									{
										typeof budget === 'string'
										?
										budget
										:
										`$${numberFormater.format(budget)}`
									}
								</Text>
								<Text>
									{
										typeof boxOffice === 'string'
										?
										boxOffice
										:
										`$${numberFormater.format(boxOffice)}`
									}
								</Text>
								<Text>{genres.join(', ')}</Text>
							</Flex>
						</Flex>

					</Flex>
				</Flex>
				<StarButton buttonActive />
			</Flex>
		</Paper>
	);
}
