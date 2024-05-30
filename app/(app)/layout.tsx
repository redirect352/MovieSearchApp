import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript, Flex } from '@mantine/core';
import classes from '../app.module.css';
import { resolver, theme } from '../../theme';
import { Sidebar } from '@/components';
import { Providers } from '@/components/Providers/providers';
import { createNewGuestSession, getMovieGenresList } from '@/services/apiService';

export const metadata = {
  title: 'Movie search app',
  description: 'MSA using Mantine with Next.js!',
};

type LayoutProps = React.PropsWithChildren<{
}>;

export default async function RootLayout({ children }: LayoutProps) {
	const genres = await getMovieGenresList();
	const sessionId = await createNewGuestSession();
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
			<Providers sessionId={sessionId} value={genres}>
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
