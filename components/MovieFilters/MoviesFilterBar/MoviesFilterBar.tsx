'use client';

import { Button, Flex, Title } from '@mantine/core';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useContext } from 'react';
import RatingFilter from '../RatingFilter/RatingFilter';
import classes from './styles.module.scss';
import CloseSvgIcon from '@/icons/close';
import YearFilter from '../YearFilter/YearFilter';
import GenreFilter from '../GenreFilter/GenreFilter';
import { GenreContext } from '@/components/Providers/providers';

export default function MoviesFilterBar() {
    const searchParams = useSearchParams();
	const { replace } = useRouter();
	const pathname = usePathname();
	const resetFilters = () => {
        replace(`${pathname}`);
	};
	const genres = useContext(GenreContext);
	const genresSelectOptions = genres.map(val => ({ value: val.id.toString(), label: val.name }));
	const resetDisabled = searchParams.size <= 0;

	return (
		<Flex gap={16} align="center">
			<GenreFilter className={classes.filterInputs} selectOptions={genresSelectOptions} />
			<YearFilter className={classes.filterInputs} />
			<RatingFilter className={classes.filterInputs}>
				Ratings
			</RatingFilter>
			<Flex direction="column" gap={8}>
				<Title order={4} className={classes.resetHeader}>
					Reset
				</Title>
				<Button
					className={classes.resetButton}
					variant="transparent"
					size="sm"
					classNames={{ root: classes.root }}
					onClick={resetFilters}
					disabled={resetDisabled}
					>
					Reset button
					<CloseSvgIcon className={classes.resetButtonIcon} />
				</Button>
			</Flex>

		</Flex>
	);
}
