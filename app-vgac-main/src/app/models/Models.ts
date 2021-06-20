export interface Game {
    background_image: String,
    name: String,
    released: String,
    metacritic_url: String,
    website: String,
    description: String,
    metacritic: String,
    genres: Array<Genre>,
    parent_platforms: Array<ParentPlatform>,
    publishers: Array<Publishers>,
    ratings: Array<Rating>,
    screenshots: Array<Screenshots>,
    trailers: Array<Trailer>,

}

export interface APIResponse<T> {
    results: Array<T>
}

export interface Genre {
    name: String
}

export interface ParentPlatform {
    platform: {
        name: String
    }
}

export interface Publishers {
    name: String
}

export interface Rating {
    id: Number,
    count: Number,
    title: String
}

export interface Screenshots {
    image: String
}

export interface Trailer {
    data: {
        max: String
    }
}