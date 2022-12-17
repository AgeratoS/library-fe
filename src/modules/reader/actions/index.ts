import { createAction } from "@reduxjs/toolkit";
import { Reader, ReaderId, UpdateReaderParams } from "../types";

const READER = {
    GET_READER: {
        request: 'reader/getReader/request',
        complete: 'reader/getReader/success',
        error: 'reader/getReader/error'
    },
    UPDATE_READER: {
        request: 'reader/updateReader/request',
        complete: 'reader/updateReader/success',
        error: 'reader/updateReader/error'
    }
};

export const getReaderRequest = createAction<ReaderId>(READER.GET_READER.request);
export const getReaderSuccess = createAction<Reader>(READER.GET_READER.complete);
export const getReaderError = createAction(READER.GET_READER.error);

export const updateReaderRequest = createAction<UpdateReaderParams>(READER.UPDATE_READER.request);
export const updateReaderSuccess = createAction<Reader>(READER.UPDATE_READER.complete);
export const updateReaderError = createAction(READER.UPDATE_READER.error);