import { SelectChangeEvent } from "@mui/material";
import { ReactNode } from "react";

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

export type GenresSelectorProps = {
    genres: Genre[];
    selected: Genre[];
    labelId?: string;
    id?: string;
    onChange?: (event: SelectChangeEvent<Genre[]>, child: ReactNode) => void;
}

export type GenresSelectorContainerProps = {
    selected: Genre[];
    onChange: (genres: Genre[]) => void;
}