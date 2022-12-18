import { ApiCall } from "@/appTypes";
import { ReaderData } from "@/modules/profile/types";
import { ApiHelper } from "@/modules/utils";
import { AuthData } from "../types";

type Token = string;
type Profile = {
    email: string;
    password: string;
}

interface AuthApi {
    register: ApiCall<Token, AuthData>;
    login: ApiCall<Token, AuthData>;
    findProfile: ApiCall<Profile, AuthData>;
    createReader: ApiCall<boolean, ReaderData>;
}


export default class Api implements AuthApi {
    register(auth: AuthData) {
        return ApiHelper.post<Token>(`${process.env.REACT_APP_BE_BASE}/profile/`, {
            body: JSON.stringify(auth)
        });
    }

    login(auth: AuthData) {
        return ApiHelper.post<Token>(`${process.env.REACT_APP_BE_BASE}/login`, {
            body: JSON.stringify(auth)
        })
    }
    findProfile(auth: AuthData) {
        return ApiHelper.get<Profile>(`${process.env.REACT_APP_BE_BASE}/profile/findProfile`, auth);
    }

    createReader(readerData: ReaderData) {
        return ApiHelper.post<boolean>(`${process.env.REACT_APP_BE_BASE}/linkReaderToProfile`, {
            body: JSON.stringify(readerData)
        });
    }
}