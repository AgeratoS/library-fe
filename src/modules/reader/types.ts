import { Identifyable } from "@/appTypes";
import { types } from "../genre";

export enum Gender {
    MALE, FEMALE
}

export type Reader = {
    firstName: string;
    lastName: string;
    middleName?: string;
    gender: Gender;
    age: number;
    preferredGenres?: Array<Identifyable<types.Genre>>;
}

export type ReaderId = number;

export type ReaderInfoProps = {
    reader: Reader;
}

export type GenderProps = {
    gender: Gender;
}

export type ReaderInfoFormProps = {
    onSubmit: (vales: Partial<Reader>) => void;
    initial: Reader;
}

export type ReaderFormBaseProps = {
    onSubmit: (values: Reader) => void;
    initial: Reader;
    buttonText?: string;
}

export type UpdateReaderParams = {
    readerId: ReaderId,
    updateData: Omit<Partial<Reader>, 'books'>
}