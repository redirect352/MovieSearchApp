import { Button, Flex, Title } from '@mantine/core';
import SelectBlock from './components/SelectBlock/SelectBlock';
import NumberInputBlock from './components/NumberInputBlock/NumberInputBlock';
import classes from './styles.module.css';
import CloseSvgIcon from '@/icons/close';
import CustomButton from '@/UI/CustomButton';

const firstSelect = ['Horror', 'Epic', 'Romant'];
const secondSelect = ['2022', '2023', '2024'];

export default function MoviesFilterBar() {
	return (
		<Flex gap={16} align="center">
			<SelectBlock
				className={classes.filterInputs}
				options={firstSelect}
				placeholder="Select genre"
				>
				Genres
			</SelectBlock>
			<SelectBlock
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
				>
				Ratings
			</NumberInputBlock>
			<Flex direction="column" gap={8}>
				<Title size={16} className={classes.resetHeader}>
					Reset
				</Title>
				<CustomButton size="compact-sm" variant="transparent">
					Reset button
					<CloseSvgIcon className={classes.resetButtonIcon} />
				</CustomButton>
				<Button className={classes.resetButton} variant="transparent" size="compact-sm" classNames={{ root: classes.root, label: classes.label }}>
					Reset button
					<CloseSvgIcon className={classes.resetButtonIcon} />
				</Button>
			</Flex>

		</Flex>
	);
}
