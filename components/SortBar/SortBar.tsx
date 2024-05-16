'use client';

import React, { useState } from 'react';
import { ComboboxItem, Flex } from '@mantine/core';
import SelectBlock from '../SelectBlock/SelectBlock';
import classes from './styles.module.scss';
import { sortOptions } from './sortOptions';
// import SearchForm from '../SearchForm';

export default function SortBar() {
	const [sort, setSort] = useState<ComboboxItem | null>(null);
	return (
		<Flex align="flex-end" justify="flex-end" gap={24}>
			{/* <SearchForm /> */}
			<SelectBlock
				className={classes.sortByBlock}
				options={sortOptions}
				value={sort}
				setValue={setSort}
				>
				Sort by
			</SelectBlock>
		</Flex>
	);
}
