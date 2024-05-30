'use client';

import { Flex, Title, Text } from '@mantine/core';
import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { StarButton } from '@/UI';
import MovieRatingModal from '../MovieRatingModal/MovieRatingModal';
import { MovieMainInfo } from '@/types';

export type MovieHeaderProps = {
} & MovieMainInfo;
export default function MovieHeader(props:MovieHeaderProps) {
	const { id, title, releaseYear, rating, viewsCount } = props;
	const [opened, { open, close }] = useDisclosure(false);
	return (
		<>
			<Flex gap={8} direction="column" justify="flex-start" align="flex-start">
				<Link href={`/movies/${id}`} style={{ textDecoration: 'none' }}>
					<Title order={3} c="var(--mantine-color-purple-5)" ta="left" w="100%">
						{title}
					</Title>
				</Link>
				<Text c="dimmed">{releaseYear}</Text>
				<Flex gap={8} align="center">
					<Flex align="center" gap={4}>
						<StarButton buttonActive onClick={open} />
						<Text fw={600}>{rating}</Text>
					</Flex>
					<Text c="dimmed">{viewsCount}</Text>
				</Flex>
			</Flex>
			<MovieRatingModal
				opened={opened}
				onClose={close}
				movieTitle={title}
				movieId={id}
				centered
				startRating={props.userRating}
				/>
		</>
	);
}
