import { FormEntity, Identifyable } from "@/appTypes";
import { Book } from "../book/types";
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
    id: ReaderId;
    books: Book[];
}

export type ReaderEntity = FormEntity<Omit<Reader, 'books'>>;

export type ReaderId = number;

export type ReaderInfoProps = {
    reader: Reader;
}

export type GenderProps = {
    gender: Gender;
}

export type ReaderInfoFormProps = {
    onSubmit: (vales: ReaderEntity) => void;
    initial: ReaderEntity;
}

export type ReaderFormBaseProps = {
    onSubmit: (values: ReaderEntity) => void;
    initial: ReaderEntity;
    buttonText?: string;
}

export type UpdateReaderParams = {
    readerId: ReaderId,
    updateData: ReaderEntity
}

export type UnlinkBookParams = {
    book: Book,
    reader: Reader
}

export type RentBookParams = {
    reader: Reader,
    book: Book
}