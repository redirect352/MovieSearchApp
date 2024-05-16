import { ActionIcon, ActionIconProps, PolymorphicComponentProps } from '@mantine/core';
import { IconStarFilled } from '@tabler/icons-react';
import React from 'react';

type StarButtonProps = {
	buttonActive: boolean,
} & PolymorphicComponentProps<'button', ActionIconProps>;

export default function StarButton(props : StarButtonProps) {
	const { buttonActive, ...componentProps } = props;
	const buttonColor = buttonActive ? 'var(--star-active-color)' : 'var(--star-default-color)';

	return (
		<ActionIcon
			{...componentProps}
			variant="transparent"
			>
			<IconStarFilled color={buttonColor} size={28} />
		</ActionIcon>
	);
}
