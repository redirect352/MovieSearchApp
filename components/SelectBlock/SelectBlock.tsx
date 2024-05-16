'use client';

import { ComboboxData, ComboboxItem, Flex, Select, Title, useMantineTheme } from '@mantine/core';
import { PropsWithChildren, useState } from 'react';
import classes from './styles.module.css';
import DownIconSvg from '@/icons/down';
import UpIconSvg from '@/icons/up';

type SelectBlockProps = {
	className?: string,
	options? : ComboboxData,
	placeholder? : string,
	value? : ComboboxItem | null,
	setValue?:(value: ComboboxItem) => void
};

export default function SelectBlock({ className, options, placeholder = '', children, value, setValue = () => {} } : PropsWithChildren<SelectBlockProps>) {
	const theme = useMantineTheme();
	const [isOpened, setIsOpened] = useState(false);
	return (
		<div className={className}>
			<Flex className={classes.selectBlock}>
				<Title order={4}>
					{children}
				</Title>
				<Select
					size="md"
					value={value ? value.value : null}
					onChange={(val, option) => setValue(option)}
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
