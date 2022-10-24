import { PropsWithChildren } from "react";

export type Identifyable<T> = T | {
    id: number;
}

export type Genre = {
    name: string;
}

export type Book = {
    title: string;
    shortAnnotation?: string;
    year: number;
    publisher: string;
    isbn?: string;
    quantity?: number;
    genres?: Array<Identifyable<Genre>>
}

export enum Gender {
    MALE, FEMALE
}

export type Reader = {
    firstName: string;
    lastName: string;
    middleName?: string;
    gender: Gender;
    age: number;
    preferredGenres?: Array<Identifyable<Genre>>;
}

export type Form = {
    whenReturn: Date;
    whenTaken: Date;
    isReturned: boolean;
    reader: Identifyable<Reader>;
    book: Identifyable<Book>;
}

// Props for components

export type BooksListProps = PropsWithChildren<{
    books: Book[]
}>