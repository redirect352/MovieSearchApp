'use client';

import { Flex } from '@mantine/core';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import classes from './SidebarOptions.module.css';
import options from './options';

export default function SidebarOptions() {
	const path = usePathname();
	const choosenOption = path.includes('/ratedMovies') ? 0 : 1;
	return (
		<Flex direction="column" gap="16px">
			{
				options.map((option, index) =>
					<Link
						href={option.link}
						key={option.id}
						className={index === choosenOption ? classes.option : [classes.option, classes.optionActive].join(' ')}
						>
							{option.label}
					</Link>
				)
			}
		</Flex>
	);
}
