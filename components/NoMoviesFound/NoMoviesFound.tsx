import { Flex, Title } from '@mantine/core';
import React from 'react';
import NothingFound from '@/icons/NothingFound';

export default function NoMoviesFound() {
	return (
		<Flex direction="column" gap={16} align="center" justify="flex-end">
			<NothingFound />
			<Title order={3}>
				We don&apos;t have such movies, look for another one
			</Title>
		</Flex>
	);
}
