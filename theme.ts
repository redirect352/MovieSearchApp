'use client';

import { Button, CSSVariablesResolver, Input, MantineColorsTuple, colorsTuple, createTheme, px, rem } from '@mantine/core';
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
	white: '#FFFFFF',
	black: '#232134',
	colors: {
		grey: greyScale,
		purple: purpleScale,
		myYellow: colorsTuple(
			Array.from({ length: 10 }, () => '#FAB005')),
	},
	radius: {
		sm: rem(8),
		md: rem(8),
	},
	primaryShade: { light: 5, dark: 6 },
	headings: {
		fontWeight: '600',
		sizes: {
			h1: {
				fontWeight: '700',
				fontSize: rem(32),
				lineHeight: rem(44.8),

			},
			h3: {
				fontSize: rem(20),
				lineHeight: rem(24.2),

			},
			h4: {
				lineHeight: rem(22.4),
				fontSize: rem(16),
			},
		},
	},
	lineHeights: {
		sm: rem(20),
		md: rem(20),
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
		Input: Input.extend({
			vars: (_, props) => {
				if (props.size === 'sm' || props.size === 'md') {
					return {
						wrapper: {
							'--input-fz': rem(14),
						},
					};
				}
				return { wrapper: {} };
				},
		}),
	},
});

// eslint-disable-next-line @typescript-eslint/no-shadow
export const resolver: CSSVariablesResolver = (theme) => ({
	variables: {
		'--button-hover': theme.colors.purple[4],
		'--mantine-hover-color': theme.colors.purple[4],
		'--star-active-color': theme.colors.yellow[6],
		'--star-default-color': theme.colors.grey[4],
		'--text-color': theme.black,
		'--mantine-color-dimmed': theme.colors.grey[6],
		'--pagination-control-radius': rem(4),
	},
	light: {
	},
	dark: {
	},
});
