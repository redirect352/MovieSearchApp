import { Divider, Flex, Paper, Space, Title, rem, Text } from '@mantine/core';
import React, { Suspense } from 'react';
import { NoPoster, VideoPlayer } from '@/UI';
import MovieAuthor from './components/MovieAuthor';
import { MovieExtendedInfo } from '@/types';

export default function MovieExtraInfoCard(props: MovieExtendedInfo) {
	const { trailer, overview, productionCompanies } = props;
	return (
		<Paper p={24}>
			<Flex gap={20} direction="column">
				<Flex gap={16} direction="column" align="flex-start">
					<Title order={3}>Trailer</Title>
					<Suspense fallback={<Flex w={500} h={281}><NoPoster /></Flex>}>
						<VideoPlayer
							width={rem(500)}
							height={rem(281)}
							src={trailer ? `https://www.youtube.com/embed/${trailer}` : trailer}
							title="Trailer"
						/>
					</Suspense>
					<Divider w="100%" my={0} />
					<Text component="div" ta="left">
						<Title order={3}>Description</Title>
						<Space h="md" />
						<Text ta="left">{overview}</Text>
					</Text>
					<Divider w="100%" my={0} />
					<Flex gap={16} direction="column">
						<Title order={3} ta="left">Production</Title>
						<Flex gap={12} direction="column">
							{
								productionCompanies.length !== 0 ?
								productionCompanies.map((company) =>
									<MovieAuthor
									key={company.id}
									imageSrc={`https://image.tmdb.org/t/p/w500${company.logoPath ?? ''}`}
									title={company.name}
									/>
								)
								:
								<Text c="dimmed">No data about Production companies</Text>
							}
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Paper>
	);
}
