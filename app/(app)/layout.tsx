import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript, Flex } from '@mantine/core';
import classes from '../app.module.css';
import { resolver, theme } from '../../theme';
import { Sidebar } from '@/components';
import { Providers } from '@/components/Providers/providers';
import { getMovieGenresList } from '@/services/apiService';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default async function RootLayout({ children }: { children: any }) {
	const genres = await getMovieGenresList();
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
			<Providers value={genres}>
				<MantineProvider theme={theme} cssVariablesResolver={resolver}>
					<Flex className={classes.appContainer}>
						<Sidebar />
						<div className={classes.contentContainer}>
							{children}
						</div>
					</Flex>
				</MantineProvider>
			</Providers>
			</body>
		</html>
	);
}

// export default function RootLayout({ children }: { children: any }) {
// 	return (
// 		<>
// 			<Sidebar />
// 			<div className={classes.contentContainer}>
// 				{children}
// 			</div>
// 		</>
// 	);
// }
