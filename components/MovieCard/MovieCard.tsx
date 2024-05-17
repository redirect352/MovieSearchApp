import React from 'react';
import { Flex, Paper, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './styles.module.scss';
import { StarButton, ImageWithFallback } from '@/UI';
import MovieRatingModal from '../MovieRatingModal';

type MovieCardProps = {
	title : string,
	releaseYear: number | string,
	genres: string[],
	rating: number,
	viewsCound: number | string,
	image?: string,
};

export default function MovieCard(props : MovieCardProps) {
	const { title, releaseYear, genres, rating, viewsCound, image } = props;
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<Paper className={classes.cardBox}>
				<Flex gap={8} justify="space-between">
					<Flex className={classes.mainInfo}>
						<ImageWithFallback
							width={119}
							height={170}
							src={image ?? ''}
							alt="" />
						<Flex gap={16} direction="column" justify="space-between">
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
							<Flex gap={12}>
								<Text c="dimmed">Genres</Text>
								<Text>{genres.join(', ')}</Text>
							</Flex>
						</Flex>
					</Flex>
					<StarButton buttonActive />
				</Flex>
			</Paper>
			<MovieRatingModal opened={opened} onClose={close} movieTitle={title} centered />
		</>
	);
}
