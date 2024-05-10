'use client';

import { ActionIcon, Flex, NumberInput, NumberInputHandlers, NumberInputProps } from '@mantine/core';
import { RefObject, useRef } from 'react';
import classes from './styles.module.css';
import DownIconSvg from '@/icons/down';

type CustomNumberInputProps = {
	props : NumberInputProps,
	value? : string | number,
	setValue?: (value: string | number) => void,
};

export default function CustomNumberInput({ props, value, setValue } : CustomNumberInputProps) {
	const ref = useRef<NumberInputHandlers>(null);
	return (
		<NumberInput
			value={value}
			onChange={setValue}
			handlersRef={ref}
			{...props}
			rightSection={
				<NumberInputSidebar
					handlersRef={ref}
					/>
			}
			/>
	);
}

function NumberInputSidebar({ handlersRef }:
	{ handlersRef : RefObject<NumberInputHandlers> }) {
	return (
		<Flex direction="column" h="100%" justify="center">
			<Flex align="center" justify="center">
				<ActionIcon size={12} variant="white" onClick={() => handlersRef?.current?.increment()}>
					<DownIconSvg className={classes.rotateIcon} />
				</ActionIcon>
			</Flex>
			<Flex align="center" justify="center">
				<ActionIcon size={12} variant="white" onClick={() => handlersRef?.current?.decrement()}>
					<DownIconSvg />
				</ActionIcon>
			</Flex>
		</Flex>
	);
}
