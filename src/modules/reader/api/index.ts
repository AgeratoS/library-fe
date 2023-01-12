import { ApiCall } from "@/appTypes";
import { Book } from "@/modules/book/types";
import { ApiHelper } from "@/modules/utils";
import { Reader, ReaderId, RentBookParams, UnlinkBookParams, UpdateReaderParams } from "../types";

interface IReaderApi {
    getReader: ApiCall<Reader, ReaderId>;
    updateReader: ApiCall<any, UpdateReaderParams>;

    unlinkBook: ApiCall<boolean, UnlinkBookParams>;
    linkBook: ApiCall<boolean, RentBookParams>;
}

class ReaderApi implements IReaderApi {
    getReader(readerId: ReaderId) {
        return ApiHelper.get<Reader>(`${process.env.REACT_APP_BE_BASE}/readers/${readerId}`)
    }

    updateReader(updateReaderParams: UpdateReaderParams) {
        return ApiHelper.patch<any>(`${process.env.REACT_APP_BE_BASE}/readers/${updateReaderParams.readerId}`, {
            body: JSON.stringify(updateReaderParams.updateData)
        })
    }

    unlinkBook(params: UnlinkBookParams) {
        return ApiHelper.delete<boolean>(`${process.env.REACT_APP_BE_BASE}/readers/${params.reader.id}/book/${params.book.id}/unlink`)
    }

    linkBook(params: RentBookParams) {
        return ApiHelper.post<boolean>(`${process.env.REACT_APP_BE_BASE}/readers/${params.reader.id}/book/${params.book.id}/rent`)
    }
}

export default ReaderApi;