'use client';

import React, { useState } from 'react';
import { ComboboxItem, Flex } from '@mantine/core';
import SelectBlock from '../../../UI/SelectBlock/SelectBlock';
import classes from './styles.module.scss';
import { sortOptions } from './sortOptions';
import { useSearchParamValue, useUpdatePageURL } from '@/hooks';
// import SearchForm from '../SearchForm';

export default function SortBar() {
    const currentSort = useSearchParamValue<string>('sortby');
	const { updateURL } = useUpdatePageURL();
	const [sort, setSort] = useState<ComboboxItem | null>(
		sortOptions.find((val) => val.value === currentSort) ?? null
	);
    const onValueChange = (newSort: ComboboxItem) => {
        setSort(newSort);
		updateURL('sortby', newSort?.value ?? '');
    };
	return (
		<Flex align="flex-end" justify="flex-end" gap={24}>
			{/* <SearchForm /> */}
			<SelectBlock
				className={classes.sortByBlock}
				options={sortOptions}
				value={sort}
				setValue={onValueChange}
				>
				Sort by
			</SelectBlock>
		</Flex>
	);
}
