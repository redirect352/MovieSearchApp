import { Divider, Flex, Paper, Space, Title, rem, Text } from '@mantine/core';
import React from 'react';
import { VideoPlayer } from '@/UI';
import MovieAuthor from './components/MovieAuthor';

export default function MovieExtraInfoCard() {
	return (
		<Paper p={24}>
			<Flex gap={20} direction="column">
				<Flex gap={16} direction="column" align="flex-start">
					<Title order={3}>Trailer</Title>
					<VideoPlayer
						width={rem(500)}
						height={rem(281)}
						// src=""
						src="https://www.youtube.com/embed/Ki4haFrqSrw"
						title="Trailer"
					/>
					<Divider w="100%" my={0} />
					<Text ta="left">
						<Title order={3}>Description</Title>
						<Space h="md" />
						<Text ta="left">
							Dan Browns controversial best-selling novel about a powerful
							secret thats been kept
							under wraps for thousands
							of years comes
							to the screen in this suspense thriller from Director Ron Howard.
						</Text>
					</Text>
					<Divider w="100%" my={0} />
					<Flex gap={16} direction="column">
						<Title order={3}>Production</Title>
						<Flex gap={12} direction="column">
							<MovieAuthor imageSrc="" title="Castle Rock Entertainment" />
							<MovieAuthor imageSrc="" title="Castle Rock Entertainment" />
							<MovieAuthor imageSrc="" title="Castle Rock Entertainment" />
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Paper>
	);
}
