import { ApiCall } from "@/appTypes";
import { ApiHelper } from "@/utils";
import { AddReaderFormData, AuthData } from "../types";

type Token = string;
type Profile = {
    email: string;
    password: string;
}

interface AuthApi {
    register: ApiCall<Token, AuthData>;
    login: ApiCall<Token, AuthData>;
    findProfile: ApiCall<Profile, AuthData>;
    createReader: ApiCall<boolean, AddReaderFormData>;
}


export default class Api implements AuthApi {
    register(auth: AuthData) {
        return ApiHelper.post<Token>(`${process.env.REACT_APP_BE_BASE}/profiles/`, {
            body: JSON.stringify(auth)
        });
    }

    login(auth: AuthData) {
        return ApiHelper.post<Token>(`${process.env.REACT_APP_BE_BASE}/login`, {
            body: JSON.stringify(auth)
        })
    }
    findProfile(auth: AuthData) {
        return ApiHelper.get<Profile>(`${process.env.REACT_APP_BE_BASE}/profiles`, auth);
    }

    createReader(readerData: AddReaderFormData) {
        return ApiHelper.post<boolean>(`${process.env.REACT_APP_BE_BASE}/linkReaderToProfile`, {
            body: JSON.stringify(readerData)
        });
    }
}