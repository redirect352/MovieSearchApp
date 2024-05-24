import { Anchor, Breadcrumbs, Flex } from '@mantine/core';
import classes from './styles.module.scss';
import { MovieExtraInfoCard, MovieFullInfoCard } from '@/components';
import { getMovieExtendedInfo } from '@/services/apiService';

const items = (id : number, movieTitle: string) => [
	{ title: 'Movies', href: '/movies' },
	{ title: movieTitle, href: `/movies/${id}` },
  ].map((item, index) => (
	<Anchor href={item.href} key={index}>
		{item.title}
	</Anchor>
  ));

export default async function MoviePage({ params }: { params: { id: string } }) {
	const movieData = await getMovieExtendedInfo(+params.id);
	return (
		<Flex className={classes.movieContainer}>
			<Breadcrumbs>
				{items(+params.id, movieData.title)}
			</Breadcrumbs>
			<MovieFullInfoCard {...movieData} />
			<MovieExtraInfoCard {...movieData} />
		</Flex>
	);
}
