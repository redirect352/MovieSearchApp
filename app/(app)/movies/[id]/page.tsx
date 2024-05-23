import { Anchor, Breadcrumbs, Flex } from '@mantine/core';
import moment from 'moment';
import classes from './styles.module.scss';
import { MovieExtraInfoCard, MovieFullInfoCard } from '@/components';

const items = [
	{ title: 'Movies', href: '/movies' },
	{ title: 'MovieTitle', href: '/movies/123' },
  ].map((item, index) => (
	<Anchor href={item.href} key={index}>
		{item.title}
	</Anchor>
  ));
const defProps = {
	id: 11,
	title: 'The Green Mile',
	releaseYear: 1999,
	genres: ['Drama', 'Crime', 'Fantasy'],
	rating: 9.3,
	viewsCount: '2.9M',
	image: '/test.webp',
	// image: '',
	duration: '3h 11m',
	premiereDate: moment(new Date('12-12-1996')).format('MMMM D, YYYY'),
	budget: 125_000_000,
	boxOffice: 760_006_945,
};

export default function MoviePage() {
	return (
		<Flex className={classes.movieContainer}>
			<Breadcrumbs>
				{items}
			</Breadcrumbs>
			<MovieFullInfoCard {...defProps} />
			<MovieExtraInfoCard />
		</Flex>
	);
}
