import { Book } from "@/modules/book/types";
import { Profile } from "@/modules/profile/types"
import { Reader } from "@/modules/reader/types";
import { createAction } from "@reduxjs/toolkit"

const ADMIN_ACTIONS_MAP = {
    profile: {
        select: 'admin/profile/select',
        reset: 'admin/profile/reset',
        readers: {
            request: 'admin/profile/readers/request',
            complete: 'admin/profile/readers/success',
            error: 'admin/profile/readers/error'
        }
    },
    reader: {
        select: 'admin/reader/select',
        reset: 'admin/reader/reset',
        books: {
            request: 'admin/reader/books/request',
            complete: 'admin/reader/books/success',
            error: 'admin/reader/books/error'
        }
    },
}

export const selectProfile = createAction<Profile>(ADMIN_ACTIONS_MAP.profile.select);
export const resetProfile = createAction(ADMIN_ACTIONS_MAP.profile.reset);

export const getReadersProfileRequest = createAction<Profile>(ADMIN_ACTIONS_MAP.profile.readers.request);
export const getReadersProfileSuccess = createAction<Reader[]>(ADMIN_ACTIONS_MAP.profile.readers.complete);
export const getReadersProfileError = createAction(ADMIN_ACTIONS_MAP.profile.readers.error);

export const selectReader = createAction<Reader>(ADMIN_ACTIONS_MAP.reader.select);
export const resetReader = createAction<Reader>(ADMIN_ACTIONS_MAP.reader.reset);

export const getBooksReaderRequest = createAction<Reader>(ADMIN_ACTIONS_MAP.reader.books.request);
export const getBooksReaderSuccess = createAction<Book[]>(ADMIN_ACTIONS_MAP.reader.books.complete);
export const getBooksReaderError = createAction(ADMIN_ACTIONS_MAP.reader.books.error);