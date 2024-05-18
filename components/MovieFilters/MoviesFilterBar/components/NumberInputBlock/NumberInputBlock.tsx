'use client';

import { Flex, Title } from '@mantine/core';
import { PropsWithChildren } from 'react';
import classes from './styles.module.css';
import { CustomNumberInput } from '@/UI';

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
				<Title order={4}>
					{children}
				</Title>
				<Flex direction="row" gap={12}>
					<CustomNumberInput
						value={from}
						setValue={setFrom}
						props={{
							size: 'md',
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
							size: 'md',
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