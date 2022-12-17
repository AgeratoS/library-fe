import { PropsWithChildren } from "react";
import { Identifyable } from "@/appTypes";
import { types } from "../genre";


export type Book = {
    title: string;
    shortAnnotation?: string;
    year: number;
    publisher: string;
    isbn?: string;
    author: string;
    genres?: Array<Identifyable<types.Genre>>
}

export type BooksListProps = PropsWithChildren<{
    books: Book[]
}>

export type BookProps = {
    book: Book
}