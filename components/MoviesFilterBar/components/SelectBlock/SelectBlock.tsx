'use client';

import { ComboboxData, Flex, Select, Title, useMantineTheme } from '@mantine/core';
import { PropsWithChildren, useState } from 'react';
import classes from './styles.module.css';
import DownIconSvg from '@/icons/down';
import UpIconSvg from '@/icons/up';

type SelectBlockProps = {
	className?: string,
	options? : ComboboxData,
	placeholder? : string
};

export default function SelectBlock({ className, options, placeholder = '', children } : PropsWithChildren<SelectBlockProps>) {
	const theme = useMantineTheme();
	const [isOpened, setIsOpened] = useState(false);
	return (
		<div className={className}>
			<Flex className={classes.selectBlock}>
				<Title size={16}>
					{children}
				</Title>
				<Select
					withCheckIcon={false}
					classNames={{ input: classes.selectInput, option: classes.selectOption }}
					onDropdownOpen={() => setIsOpened(true)}
					onDropdownClose={() => setIsOpened(false)}
					data={options}
					comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
					placeholder={placeholder}
					rightSection={
						isOpened ?
						<UpIconSvg stroke={theme.colors.purple[5]} />
						:
						<DownIconSvg />}
					w="100%"
					/>
			</Flex>
		</div>
	);
}
