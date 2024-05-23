import moment from 'moment';
import { MovieGenre, MovieInfo } from '@/types';

const apiBase = 'https://api.themoviedb.org/3';

export async function getMovies(searchParams : Record<string, string> | URLSearchParams):
    Promise<{
        pages : number,
        movies: MovieInfo[]
    }> {
	const api_key = process.env.API_KEY;
	const params = new URLSearchParams(searchParams);
	if (!params.has('page')) {
		params.set('page', '1');
	}
	const res = await fetch(
		`${apiBase}/discover/movie?include_adult=false&language=en-US&api_key=${api_key}&${params.toString()}`,
		{ next: { revalidate: 3600 } }
	);

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}
    const jsonRes = await res.json();
    const result = {
        pages: jsonRes.total_pages,
        movies: jsonRes.results.map(
            (item : any) => ({
                id: item.id,
                title: item.title,
                releaseYear: moment(item.release_date).year(),
                genres: ['Drama', 'Crime', 'Fantasy'],
                rating: item.vote_average,
                viewsCount: item.vote_count,
                image: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path ?? '/'}` : '',
            })
        ),
    };
    return result;
}

export async function getMovieGenresList():Promise<MovieGenre[]> {
	const api_key = process.env.API_KEY;
	const res = await fetch(
		`${apiBase}/genre/movie/list?api_key=${api_key}`,
		{ next: { revalidate: 3600 } }
	);
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}
    const jsonRes = await res.json();
    return jsonRes.genres;
}
