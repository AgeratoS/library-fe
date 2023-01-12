import { Book } from "../book/types";
import { Profile } from "../profile/types";
import { Reader } from "../reader/types";

export type AdminState = {
    selectedProfile?: Profile,
    selectedReader?: Reader,
    books?: Book[]
}