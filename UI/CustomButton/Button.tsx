'use client';

import { Button, ButtonProps, PolymorphicComponentProps } from '@mantine/core';
import classes from './styles.module.css';

export default function CustomButton(props : PolymorphicComponentProps<'button', ButtonProps>) {
	return (
		<Button
			classNames={{ root: classes.root }}
			{...props}
			/>
	);
}
