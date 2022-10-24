import { boolean } from "yup";

export type AuthData = {
    email: string;
    password: string;
}

export type AuthSuccess = {
    token: string;
}

export type AuthError = {
    description: string;
    code: number;
}

export type AuthFormData = {
    email: string;
    password: string;
}

export enum Gender {
    MALE = 'м', FEMALE = 'ж'
}

export type AddReaderFormData = {
    firstName: string;
    lastName: string;
    middleName?: string;
    gender: Gender;
    age: number;
}

export type AddReaderSuccess = {};

export type AddReaderError = {
    description: string;
    code: number;
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
    initial?: AddReaderFormData;
    onSubmit: (data: AddReaderFormData) => void;
    isLoading?: boolean;
}

export type LoginBoxProps = LoginFormProps;

export type RegisterBoxProps = LoginFormProps;

export type AuthState = {
    token?: string;
    loading: boolean;
    error?: AuthError | null;
}