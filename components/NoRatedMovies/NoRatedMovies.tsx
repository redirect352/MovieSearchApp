import { Button, Flex, Title } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import NoContentSVG from '@/icons/noContent';

export default function NoRatedMovies() {
	return (
		<Flex style={{ height: '100vh' }} align="center" justify="center" gap={16} direction="column">
			<NoContentSVG />
			<Flex direction="column" gap={16} align="center" justify="flex-end">
				<Title order={3}>
					You haven&apos;t rated any films yet
				</Title>
				<Link href="/movies">
					<Button size="md">
							Find Movies
					</Button>
				</Link>
			</Flex>
		</Flex>
	);
}
