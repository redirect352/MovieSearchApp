import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript, Flex } from '@mantine/core';
import classes from './app.module.css';
import { theme } from '../theme';
// import { Sidebar } from '@/components/Sidebar/Sidebar';

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
			<MantineProvider theme={theme}>
				<Flex className={classes.appContainer}>
					<h1>Root Layout</h1>
					{children}
					{/* <Sidebar /> */}
					{/* <div className={classes.contentContainer}>
						{children}
					</div> */}
				</Flex>
			</MantineProvider>
			</body>
		</html>
	);
}
