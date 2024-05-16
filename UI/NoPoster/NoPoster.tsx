import { Flex, Text, ThemeIcon } from '@mantine/core';
import React from 'react';
import { IconPhotoX } from '@tabler/icons-react';
import classes from './styles.module.scss';

export default function NoPoster() {
	return (
		<Flex className={classes.box}>
			<Flex gap={4} direction="column" align="center">
				<ThemeIcon variant="white" c="var(--mantine-color-grey-6)" size={24}>
					<IconPhotoX />
				</ThemeIcon>
				<Text span size="xs" c="dimmed" h="fit-content">No Poster</Text>
			</Flex>
		</Flex>
	);
}
