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