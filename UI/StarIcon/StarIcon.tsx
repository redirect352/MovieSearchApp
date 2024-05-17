import { ThemeIcon } from '@mantine/core';
import { IconStarFilled } from '@tabler/icons-react';
import React from 'react';

type StarIconProps = {
	color?: 'active' | 'default',
	size?:string | number,
};

export default function StarIcon({ color = 'default', size } :StarIconProps) {
	const iconColor = color === 'active' ? 'var(--star-active-color)' : 'var(--star-default-color)';

	return (
		<ThemeIcon
			color={iconColor}
			size={size}
			variant="transparent"
			>
			<IconStarFilled />
		</ThemeIcon>
	);
}
