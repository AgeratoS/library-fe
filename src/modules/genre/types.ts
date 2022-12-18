export type Genre = {
    id: number;
    name: string;
}

export type GenreProps = {
    genre: Genre;
}

export type GenresListProps = {
    genres: Genre[];
}