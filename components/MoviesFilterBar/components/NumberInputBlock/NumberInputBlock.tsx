'use client';

import { Flex, Title } from '@mantine/core';
import { PropsWithChildren } from 'react';
import classes from './styles.module.css';
import CustomNumberInput from '@/UI/NumberInput';

type NumberBlockProps = {
	className?: string,
	placeholderFrom? : string,
	placeholderTo? : string
	from : string | number,
	to : string | number,
	setFrom : (newFrom : string | number) => void,
	setTo : (newTo : string | number) => void,
};

export default function NumberInputBlock({ className, placeholderFrom = '', placeholderTo = '', children, from, to, setFrom, setTo } : PropsWithChildren<NumberBlockProps>) {
	return (
		<div className={className}>
			<Flex className={classes.numberInputBlock}>
				<Title size={16}>
					{children}
				</Title>
				<Flex direction="row" gap={12}>
					<CustomNumberInput
						value={from}
						setValue={setFrom}
						props={{
							min: 1,
							max: to === '' ? 5 : +to,
							step: 0.1,
							placeholder: placeholderFrom,
						}}
					/>
					<CustomNumberInput
						value={to}
						setValue={setTo}
						props={{
							min: from === '' ? 1 : +from,
							max: 5,
							step: 0.1,
							placeholder: placeholderTo,
						}}
					/>
				</Flex>
			</Flex>
		</div>
	);
}
