import { ApiCall } from "@/appTypes";
import { ApiHelper } from "@/utils";
import { Book } from "../types";

export type ReaderId = number;

interface IBookApi {
    getTakenBooks: ApiCall<Book[], ReaderId>,
    getUrgentBooks: ApiCall<Book[], ReaderId>
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
}

export default BookApi;