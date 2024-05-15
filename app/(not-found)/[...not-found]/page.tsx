import { Button, Flex, Title } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import border from '@/public/notFoundBorder.png';
import notFoundText from '@/public/notFound.svg';
import classes from '../notFound.module.css';

export default function Page() {
	return (
		<Flex className={classes.notFoundContainer} direction="column" gap="48px" justify="center" align="center" style={{ height: '100vh' }}>
			<Flex direction="column" gap="28px" align="center">
				<Image src={border} alt="" height={50}></Image>
				<Image src={notFoundText} height={40} alt="Page not found"></Image>
				<Image src={border} alt="" height={50}></Image>
			</Flex>
			<Flex direction="column" gap="16px" align="center">
				<Title order={3}>
					We can’t find the page you are looking for
				</Title>
				<Link href="/" replace>
					<Button size="md">Go Home</Button>
				</Link>
			</Flex>
		</Flex>
	);
}
