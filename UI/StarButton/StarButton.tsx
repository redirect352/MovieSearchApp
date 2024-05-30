import { ActionIcon, ActionIconProps, Flex, PolymorphicComponentProps, Title } from '@mantine/core';
import { IconStarFilled } from '@tabler/icons-react';
import React from 'react';

type StarButtonProps = {
	buttonActive: boolean,
	activeColor?: string,
	defaultColor?: string,
	rating?: number
} & PolymorphicComponentProps<'button', ActionIconProps>;

export default function StarButton(props : StarButtonProps) {
	const { buttonActive, rating, activeColor = 'var(--star-active-color)', defaultColor = 'var(--star-default-color)', ...componentProps } = props;
	const buttonColor = buttonActive ? activeColor : defaultColor;

	return (
		<Flex align="center">
			<ActionIcon
				{...componentProps}
				variant="transparent"
				>
				<IconStarFilled color={buttonColor} size={28} />
			</ActionIcon>
			{rating ? <Title order={4}>{rating}</Title> : <></>}
		</Flex>
	);
}
