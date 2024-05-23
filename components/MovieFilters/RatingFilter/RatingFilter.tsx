'use client';

import { Flex, Title } from '@mantine/core';
import { PropsWithChildren, useState } from 'react';
import classes from './styles.module.css';
import { CustomNumberInput } from '@/UI';
import { useSearchParamValue, useUpdatePageURL } from '@/hooks';

type NumberBlockProps = {
	className?: string,
};

export default function RatingFilter(props : PropsWithChildren<NumberBlockProps>) {
    const currentFrom = useSearchParamValue<number>('vote_average.gte') ?? '';
    const currentTo = useSearchParamValue<number>('vote_average.lte') ?? '';
	const [from, setFrom] = useState<string | number>(currentFrom);
	const [to, setTo] = useState<string | number>(currentTo);
	const { updateURL } = useUpdatePageURL();
    const { className, children } = props;

    return (
		<div className={className}>
			<Flex className={classes.numberInputBlock}>
				<Title order={4}>
					{children}
				</Title>
				<Flex direction="row" gap={12}>
					<CustomNumberInput
						value={from}
						setValue={(val) => {
                            updateURL('vote_average.gte', val.toString());
                            setFrom(val);
                        }}
						props={{
							size: 'md',
							min: 1,
							max: to === '' ? 5 : +to,
							step: 0.1,
							placeholder: 'from',
						}}
					/>
					<CustomNumberInput
						value={to}
                        setValue={(val) => {
                            updateURL('vote_average.lte', val.toString());
                            setTo(val);
                        }}
						props={{
							size: 'md',
							min: from === '' ? 1 : +from,
							max: 5,
							step: 0.1,
							placeholder: 'to',
						}}
					/>
				</Flex>
			</Flex>
		</div>
	);
}
