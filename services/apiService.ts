import moment from 'moment';
import { MovieExtendedInfo, MovieGenre, MovieInfo } from '@/types';

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
		throw new Error('Failed to get movies');
	}
    const jsonRes = await res.json();
    const result = {
        pages: jsonRes.total_pages,
        movies: jsonRes.results.map(
            (item : any) => ({
                id: item.id,
                title: item.title,
                releaseYear: moment(item.release_date).year(),
                genres: item.genre_ids,
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
		throw new Error('Failed to get movie genre list');
	}
    const jsonRes = await res.json();
    return jsonRes.genres;
}
export async function getMovieExtendedInfo(id : number):Promise<MovieExtendedInfo> {
	const api_key = process.env.API_KEY;
	const res = await fetch(
		`${apiBase}/movie/${id}?api_key=${api_key}&append_to_response=videos`,
		{ next: { revalidate: 3600 } }
	);
	if (!res.ok) {
		throw new Error('Failed to get movie ext info');
	}
    const jsonRes = await res.json();
    const trailer = jsonRes.videos.results.find((video:any) => video.type === 'Trailer')?.key;
    const result: MovieExtendedInfo = {
        title: jsonRes.title,
        id: jsonRes.id,
        releaseYear: (new Date(jsonRes.release_date)).getFullYear(),
        rating: jsonRes.vote_average,
        viewsCount: jsonRes.vote_count,
        image: `https://image.tmdb.org/t/p/w500${jsonRes.poster_path}`,
        genres: jsonRes.genres.map((apiGenre:any) => apiGenre.id),
        duration: jsonRes.runtime,
        premiereDate: jsonRes.release_date,
        budget: +jsonRes.budget,
        boxOffice: jsonRes.revenue,
        overview: jsonRes.overview,
        productionCompanies: jsonRes.production_companies.map((item:any) => ({
            id: item.id,
            logoPath: item.logo_path,
            name: item.name,
            originCountry: item.origin_country,
        })),
        trailer,
    };
    return result;
}
export async function createNewGuestSession():Promise<string> {
	const api_key = process.env.API_KEY;
	const res = await fetch(
		`${apiBase}/authentication/guest_session/new?api_key=${api_key}`,
		{ next: { revalidate: 3600 } }
	);
	if (!res.ok) {
		throw new Error('Failed to create guest session');
	}
    const jsonRes = await res.json();
    return jsonRes.guest_session_id;
}

export async function getRatedMovies(
    searchParams : Record<string, string> | URLSearchParams,
    sessionId: string
):
    Promise<{
        pages : number,
        movies: MovieInfo[],
        movieIds: Map<number, number>,
    }> {
	const api_key = process.env.API_KEY;
	const params = new URLSearchParams(searchParams);
	if (!params.has('page')) {
		params.set('page', '1');
	}
	const res = await fetch(
		`${apiBase}/guest_session/${sessionId}/rated/movies?language=en-US&api_key=${api_key}&${params.toString()}`,
		{ next: { tags: ['ratedMovies'] } }
	);

	if (!res.ok) {
        console.error(await res.json());
        return { pages: 0, movieIds: new Map(), movies: [] };
	}
    const jsonRes = await res.json();
    // const idMap = new Map<number,number>();
    return {
        pages: jsonRes.total_pages,
        movies: jsonRes.results.map(
            (item : any) => ({
                    id: item.id,
                    title: item.title,
                    releaseYear: moment(item.release_date).year(),
                    genres: item.genre_ids,
                    rating: item.vote_average,
                    viewsCount: item.vote_count,
                    image: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path ?? '/'}` : '',
                    userRating: item.rating,
                })
        ),
        movieIds: new Map(jsonRes.results.map((item : any) =>
            ([item.id, item.rating]))),
    };
}
