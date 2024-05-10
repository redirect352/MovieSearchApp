import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript, Flex } from '@mantine/core';
import classes from '../app.module.css';
import notFoundClasses from './notFound.module.css';
import { resolver, theme } from '../../theme';
import HeaderLogo from '@/components/Sidebar/components/headerLogo/HeaderLogo';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript />
				<link rel="shortcut icon" href="/favicon.svg" />
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
				/>
			</head>
			<body className={classes.body}>
			<MantineProvider theme={theme} cssVariablesResolver={resolver}>
				<Flex className={classes.appContainer}>
					<div className={notFoundClasses.notFoundSidebar}>
						<HeaderLogo />
					</div>
					{children}
				</Flex>
			</MantineProvider>
			</body>
		</html>
	);
}
