import { Identifyable } from "@/appTypes";
import { types as readerTypes } from "../reader";
import { types as bookTypes} from "../book";

export type Form = {
    whenReturn: Date;
    whenTaken: Date;
    isReturned: boolean;
    reader: Identifyable<readerTypes.Reader>;
    book: Identifyable<bookTypes.Book>;
}