import { FormEntity } from "@/appTypes";
import { PropsWithChildren, ReactNode } from "react";
import { types } from "../genre";


export type Book = {
    id: number;
    title: string;
    shortAnnotation?: string;
    year: number;
    publisher: string;
    isbn?: string;
    author: string;
    genres?: Array<types.Genre>
}

export type BooksListProps = PropsWithChildren<{
    books: Book[],
    draggable?: boolean,
    action?: (book: Book) => ReactNode,
    vertical?: boolean
}>

export type BookProps = {
    book: Book;
    actions?: ReactNode
}

export type EditBookButtonProps = {
    book: Book
}

export type RemoveBookButtonProps = {
    book: Book
}

export type EntityFormBook = FormEntity<Book>

export type BookFormBaseProps = {
    initial?: EntityFormBook,
    onSubmit: (values: EntityFormBook) => void,
    buttonText?: string
}