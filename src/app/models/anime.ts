export interface Anime {
    id: number
    title: {
        english: string
        native?: string
    }
    coverImage?: {
        large: string
    }
    duration: number
    collectionOf?: Array<string>
}
export interface AnimeDetail extends Anime {
    seasonYear: number
    averageScore: number
    genres: Array<string>
    description: string
}

export interface PageInfo {
    currentPage: number
    hasNextPage: boolean
    lastPage: number
    perPage: number
    total: number
}