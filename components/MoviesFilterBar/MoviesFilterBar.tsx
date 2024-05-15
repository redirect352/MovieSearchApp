'use client';

import { Button, ComboboxItem, Flex, Title } from '@mantine/core';
import { useState } from 'react';
import SelectBlock from './components/SelectBlock/SelectBlock';
import NumberInputBlock from './components/NumberInputBlock/NumberInputBlock';
import classes from './styles.module.scss';
import CloseSvgIcon from '@/icons/close';

const firstSelect = ['Horror', 'Epic', 'Romant'];
const secondSelect = ['2022', '2023', '2024'];

export default function MoviesFilterBar() {
	const [genre, setGenre] = useState<ComboboxItem | null>(null);
	const [releaseYear, setReleaseYear] = useState<ComboboxItem | null>(null);
	const [from, setFrom] = useState<string | number>('');
	const [to, setTo] = useState<string | number>('');
	const resetFilters = () => {
		setGenre(null);
		setReleaseYear(null);
		setFrom('');
		setTo('');
	};
	const resetDisabled = genre === null && releaseYear === null && from === '' && to === '';

	return (
		<Flex gap={16} align="center">
			<SelectBlock
				value={genre}
				setValue={(value) => setGenre(value)}
				className={classes.filterInputs}
				options={firstSelect}
				placeholder="Select genre"
				>
				Genres
			</SelectBlock>
			<SelectBlock
				value={releaseYear}
				setValue={(value) => setReleaseYear(value)}
				className={classes.filterInputs}
				options={secondSelect}
				placeholder="Select release year"
				>
				Release year
			</SelectBlock>
			<NumberInputBlock
				className={classes.filterInputs}
				placeholderFrom="from"
				placeholderTo="to"
				from={from}
				setFrom={setFrom}
				to={to}
				setTo={setTo}
				>
				Ratings
			</NumberInputBlock>
			<Flex direction="column" gap={8}>
				<Title size={16} className={classes.resetHeader}>
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
