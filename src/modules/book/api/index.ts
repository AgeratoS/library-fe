import { ApiCall } from "@/appTypes";
import { ReaderId } from "@/modules/reader/types";
import { ApiHelper } from "@/modules/utils";
import { Book } from "../types";

interface IBookApi {
    getTakenBooks: ApiCall<Book[], ReaderId>,
    getUrgentBooks: ApiCall<Book[], ReaderId>,

    getLibrary: ApiCall<Book[], never>
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
}

export default BookApi;