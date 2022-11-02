import { Gender } from "@/modules/auth/types";

export type ReaderData = {
    firstName: string;
    lastName: string;
    middleName?: string;
    gender: Gender;
    age: number;
}

export enum Role {
    READER, ADMIN
};

export type Profile = {
    email: string;
    role: Role;
    reader: ReaderData;
};

export type ProfileState = {
    profile?: Profile
}

export type ReaderInfoFormProps = {
    onSubmit: (vales: Partial<ReaderData>) => void;
    initial: ReaderData;
}

export type ReaderFormBaseProps = {
    onSubmit: (values: ReaderData) => void;
    initial: ReaderData;
    buttonText?: string;
}