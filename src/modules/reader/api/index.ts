import { ApiCall } from "@/appTypes";
import { ApiHelper } from "@/utils";
import { Reader, ReaderId, UpdateReaderParams } from "../types";

interface IReaderApi {
    getReader: ApiCall<Reader, ReaderId>;
    updateReader: ApiCall<any, UpdateReaderParams>
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
}

export default ReaderApi;