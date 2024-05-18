import { Flex } from '@mantine/core';
import classes from './Sidebar.module.css';
import HeaderLogo from './components/headerLogo/HeaderLogo';
import SidebarOptions from './components/sidebarOptions/SidebarOptions';

export default function Sidebar() {
	return (
		<div className={classes.sidebar}>
			<Flex
				direction="column"
				gap="80px"
				className={classes.sidebarContainer}
				>
				<HeaderLogo />
				<SidebarOptions />
			</Flex>
		</div>
	);
}
