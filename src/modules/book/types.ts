import { FormEntity } from "@/appTypes";
import dayjs from "dayjs";
import { PropsWithChildren, ReactNode } from "react";
import { types } from "../genre";
import { Reader } from "../reader/types";


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

export type BooksTableProps = {
    books: Book[],
    onRemoveBook?: (book: Book) => void,
    onAddBook?: VoidFunction
}

export type UnlinkBookActionParams = {
    book: Book,
    reader: Reader,
}

export type RentFormProps = {
    book: Book,
    endDate?: ReturnType<typeof dayjs>,
    onChangeDate: (value: Date | ((orev: Date) => Date) | null) => void,
    onRent: (book: Book) => void;
}