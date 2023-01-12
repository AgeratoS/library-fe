import { Profile, ReaderData } from "../profile/types";

export type AuthData = {
    email: string;
    password: string;
}

export type AuthSuccess = {
    token: string;
    profile?: Profile
}

export type AuthError = {
    message: string;
    statusCode: number;
}

export type AuthFormData = {
    email: string;
    password: string;
}

export type AddReaderSuccess = {};

export type AddReaderError = {
    message: string;
    statusCode: number;
}

export enum LoginFormMode {
    REGISTER, LOGIN
}

export type LoginFormProps = {
    initial?: AuthFormData;
    onSubmit: (data: AuthFormData) => void;
    isLoading?: boolean;
    mode?: LoginFormMode;
    onChangeMode: (mode: LoginFormMode) => void;
}

export type AddReaderFormProps = {
    initial?: ReaderData;
    onSubmit: (data: ReaderData) => void;
    isLoading?: boolean;
    buttonText?: string;
}

export type LoginBoxProps = LoginFormProps;

export type RegisterBoxProps = LoginFormProps;

export type AuthState = {
    token?: string;
    isNeedToRedirect: boolean;
    loading: boolean;
    error?: AuthError | null;
    authDataForLink?: AuthData;
}

