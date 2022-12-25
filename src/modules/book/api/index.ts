import { ApiCall } from "@/appTypes";
import { ReaderId } from "@/modules/reader/types";
import { ApiHelper } from "@/modules/utils";
import { Book } from "../types";

interface IBookApi {
    getTakenBooks: ApiCall<Book[], ReaderId>,
    getUrgentBooks: ApiCall<Book[], ReaderId>,

    getLibrary: ApiCall<Book[], never>,
    createBook: ApiCall<boolean, Book>,
    updateBook: ApiCall<boolean, Book>,
    removeBook: ApiCall<boolean, Book>
}

class BookApi implements IBookApi {

    getTakenBooks(readerId: ReaderId) {
        return ApiHelper.get<Book[]>(`${process.env.REACT_APP_BE_BASE}/readers/${readerId}/books`);
    }

    getUrgentBooks(readerId: ReaderId) {
        return ApiHelper.get<Book[]>(`${process.env.REACT_APP_BE_BASE}/readers/${readerId}/books`, {
            readerId: readerId.toString()
        })
    }

    getLibrary() {
        return ApiHelper.get<Book[]>(`${process.env.REACT_APP_BE_BASE}/books`);
    }

    createBook(book: Book) {
        return ApiHelper.post<boolean>(`${process.env.REACT_APP_BE_BASE}/books`, {
            body: JSON.stringify(book)
        });
    }

    updateBook(book: Book) {
        return ApiHelper.patch<boolean>(`${process.env.REACT_APP_BE_BASE}/books/${book.id}`, {
            body: JSON.stringify(book)
        });
    }

    removeBook(book: Book) {
        return ApiHelper.delete<boolean>(`${process.env.REACT_APP_BE_BASE}/books/${book.id}`, {
            body: JSON.stringify(book)
        })
    }
}

export default BookApi;