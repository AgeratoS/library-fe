import { types } from "../book";

export type DashboardBooksProps = {
    books: types.Book[];
    title: string;
    caption?: string;
}