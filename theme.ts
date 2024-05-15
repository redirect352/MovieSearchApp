'use client';

import { Button, CSSVariablesResolver, MantineColorsTuple, colorsTuple, createTheme, rem } from '@mantine/core';
import classes from './themeStyles.module.scss';

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
	headings: {
		fontWeight: '600',
		sizes: {
			h1: {
				fontWeight: '700',
				fontSize: rem(32),
			},
			h3: {
				fontSize: rem(20),
			},
		},
	},
	components: {
		Button: Button.extend({
			vars: (_, props) => {
				if (props.size === 'sm' || props.size === 'md') {
					return {
						root: {
							'--button-height': 'fit-content',
							'--button-padding-x': rem(20),
							'--button-fz': rem(14),
						},
					};
				}
				return { root: {} };
				},
			classNames: {
				root: classes['my-button-root'],
			},
		}),
	},
});

// eslint-disable-next-line @typescript-eslint/no-shadow
export const resolver: CSSVariablesResolver = (theme) => ({
	variables: {
		// '--button-height-sm': 'min-content',
		// '--button-height-md': 'min-content',
		// ' --button-padding-x-sm': '100px',
		// '--button-padding-x-md': '100px',
		'--button-hover': theme.colors.purple[4],
	},
	light: {
	},
	dark: {
	},
});
