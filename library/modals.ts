export type MovieDetailsType = {
    adult: boolean
    backdrop_path: string;
    genres: genre[]
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    spoken_languages: SpokenLanguagesType[]
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
    tagline: string;
    production_companies: {
        id: number;
        logo_path: string;
        name: string
        origin_country: string
    }[]
    production_countries: {
        iso_3166_1: string
        name: string
    }
    budget: number
    revenue: number
    genre_ids: number[]
}

export type SpokenLanguagesType = {
    english_name: string
    iso_639_1: string
    name: string
}

type genre = {
    id: number
    name: string    
}

export type AlternativeMovieTitlesType = {
    id: number;
    titles: {
        iso_3166_1: string
        title: string
        type: string
    }[]
}

export type RatedType = MovieDetailsType & {
    rating: number
}

export type PosterCardType = {
    id: number;
    watched: boolean;
    poster_path: string;
    title: string
}

export type PersonDetailsType = {
    biography: string;
    imdb_id: string;
    known_for_department: string;
    name: string;
    popularity: number;
    profile_path: string;
}

export type ExternalIdsTypes = {
    id: number;
    imdb_id: string
}

export type MovieCastDetails = MovieDetailsType & {
    character: string;
    order: number;
}

export type MovieCrewDetails = MovieDetailsType & {
    department: string;
    job: string
}

export type MoviePosterType = {
    id: number;
    title: string;
    release_date: string;
    vote_average: number;
    poster_path: string
}

export type MovieCreditDetailsType = {
    id: number
    cast: MovieCastDetails[]
    crew: MovieCrewDetails[]
}

export type PersonCreditDetailsType = {
    id: number
    cast: PersonCastDetails[]
    crew: PersonCrewDetails[]
}


export type PersonCastDetails = {
    id: number;
    known_for_department: string
    name: string
    profile_path: string;
    character: string
    original_name: string;
    vote_average: string;
    vote_count: string;
    order: number;
    release_date: string,
}

export type PersonCrewDetails = {
    id: number;
    known_for_department: string;
    department: string;
    job: string;
    name: string
}

