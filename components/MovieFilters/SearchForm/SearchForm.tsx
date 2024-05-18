import { Button, TextInput, rem } from '@mantine/core';
import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import classes from './styles.module.scss';

export default function SearchForm() {
	const icon = <IconSearch style={{ width: rem(16), height: rem(16) }} />;
	return (
		<form className={classes.form}>
			<TextInput
				className={classes.textField}
				leftSection={icon}
				rightSection={<Button size="sm">Search</Button>}
				classNames={{ section: classes.sect, input: classes.input }}
				placeholder="Search movie title"
				variant="filled"
				/>
		</form>
	);
}
