'use client';

import { Flex, Title, Text } from '@mantine/core';
import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { StarButton } from '@/UI';
import MovieRatingModal from '../MovieRatingModal/MovieRatingModal';

export type MovieDescriptionProps = {
	title : string,
	releaseYear: number | string,
	rating: number,
	viewsCound: number | string,
};

export default function MovieDescription(props:MovieDescriptionProps) {
	const { title, releaseYear, rating, viewsCound } = props;
	const [opened, { open, close }] = useDisclosure(false);
	return (
		<>
			<Flex gap={8} direction="column" justify="flex-start" align="flex-start">
				<Title order={3} c="var(--mantine-color-purple-5)">
					{title}
				</Title>
				<Text c="dimmed">{releaseYear}</Text>
				<Flex gap={8} align="center">
					<Flex align="center" gap={4}>
						<StarButton buttonActive onClick={open} />
						<Text fw={600}>{rating}</Text>
					</Flex>
					<Text c="dimmed">{viewsCound}</Text>
				</Flex>
			</Flex>
			<MovieRatingModal opened={opened} onClose={close} movieTitle={title} centered />
		</>
	);
}
