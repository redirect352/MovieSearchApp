type ProductionCompany = {
	id: number,
	logoPath: string,
	name: string,
	originCountry: string,
};

type MovieMainInfo = {
    id : number,
    title : string,
	releaseYear: number | string,
	rating: number,
	viewsCount: number | string,
	userRating?: number,
};

type MovieInfo = {
	genres: number[],
	image?: string,
} & MovieMainInfo;

type MovieExtendedInfo = MovieInfo & {
	duration: string,
	premiereDate: string,
	budget: number | string,
	boxOffice: number | string,
	overview: string,
	productionCompanies: ProductionCompany[],
	trailer?: string,
};

type MovieGenre = {
    id: number,
    name: string,
};
type PageProps = {
	searchParams: Record<string, string> | URLSearchParams,
};
export type {
	MovieMainInfo,
	MovieInfo,
	MovieExtendedInfo,
	MovieGenre,
	ProductionCompany,
	PageProps,
};
