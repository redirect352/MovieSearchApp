import Image from 'next/image';
import { Flex } from '@mantine/core';
import { Poppins } from 'next/font/google';
import logo from '../../../../public/logo.svg';
import classes from './HeaderLogo.module.css';

const poppins = Poppins({
	variable: '--font-poppins',
	weight: '600',
	subsets: ['latin'],
});

export default function HeaderLogo() {
	return (
		<Flex className={classes.logoContainer} direction="row" gap="lg" align="center">
			<Image src={logo} alt="" height={32} width={32}></Image>
			<h1 className={[classes.logoText, poppins.variable].join(' ')}>
				ArrowFlicks
			</h1>
		</Flex>
	);
}
