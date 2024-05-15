import NoRatedMovies from '@/components/NoRatedMovies';

export default function Page() {
	const ratedMovies : string[] = [];
	return (
		<>
			{
				ratedMovies.length === 0 ?
				<NoRatedMovies />
				:
				<div> Content </div>
			}
		</>
	);
}
