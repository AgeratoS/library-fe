import { ApiCall } from "@/appTypes";
import { ApiHelper } from "@/modules/utils";
import { Genre } from "../types";

interface IGenreApi {
    getGenres: ApiCall<Genre[], null>
}

export default class GenreApi implements IGenreApi {
    getGenres() {
        return ApiHelper.get<Genre[]>(`${process.env.REACT_APP_BE_BASE}/genres`)
    }
}