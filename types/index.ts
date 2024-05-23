type MovieMainInfo = {
    id : number,
    title : string,
	releaseYear: number | string,
	rating: number,
	viewsCount: number | string,
};

type MovieInfo = {
	genres: string[],
	image?: string,
} & MovieMainInfo;

type MovieExtendedInfo = MovieInfo & {
	duration: string,
	premiereDate: string,
	budget: number | string,
	boxOffice: number | string,
};

type MovieGenre = {
    id: number,
    name: string,
};
export type { MovieMainInfo, MovieInfo, MovieExtendedInfo, MovieGenre };
