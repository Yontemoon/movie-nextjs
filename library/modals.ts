export type movieDetails = {
    adult: boolean
    backdrop_path: string;
    genre_ids: number[]
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
    tagline: string
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
    cast: CastDetails[]
    crew: CrewDetails[]

}

export type CastDetails = {
    id: number;
    known_for_department: string
    name: string;
    profile_path: string;
    order: number;
    character: string
}

export type CrewDetails = {
    id: number;
    known_for_department: string;
    name: string;
    profile_path: string;
    department: string;
    job: string
}