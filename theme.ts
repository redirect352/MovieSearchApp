'use client';

import { CSSVariablesResolver, MantineColorsTuple, colorsTuple, createTheme } from '@mantine/core';

const greyScale: MantineColorsTuple = [
	'#FFFFFF',
	'#F5F5F6',
	'#EAEBED',
	'#D5D6DC',
	'#D5D6DC',
	'#ACADB9',
	'#7B7C88',
	'#7B7C88',
	'#7B7C88',
	'#000000',
];
const purpleScale: MantineColorsTuple = [
	'#FFFFFF',
	'#F2EBF9',
	'#E5D5FA',
	'#D1B4F8',
	'#BD93F7',
	'#9854F6',
	'#541F9D',
	'#541F9D',
	'#541F9D',
	'#541F9D',
];

export const theme = createTheme({
	fontFamily: 'Inter, sans-serif',
	primaryColor: 'purple',
	colors: {
		grey: greyScale,
		purple: purpleScale,
		myYellow: colorsTuple(
			Array.from({ length: 10 }, () => '#FAB005')),
	},
	primaryShade: { light: 5, dark: 6 },
});

// eslint-disable-next-line @typescript-eslint/no-shadow
export const resolver: CSSVariablesResolver = (theme) => ({
	variables: {
		'--button-hover': theme.colors.purple[4],
	},
	light: {
	},
	dark: {
	},
});
