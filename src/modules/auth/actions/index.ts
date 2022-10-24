import { createAction } from "@reduxjs/toolkit";
import { AddReaderError, AddReaderFormData, AddReaderSuccess, AuthData, AuthError, AuthSuccess } from "../types";

const AUTH = {
    FETCH: 'auth/fetch',
    REQUEST: 'auth/request',
    SUCCESS: 'auth/success',
    ERROR: 'auth/error',
    REGISTER: 'auth/register',

    CREATE_READER: 'auth/create_reader',
    CREATE_READER_REQUEST: 'auth/create_reader_request',
    CREATE_READER_SUCCESS: 'auth/create_reader_success',
    CREATE_READER_ERROR: 'auth/create_reader_error',
}

const auth = createAction<AuthData>(AUTH.FETCH);
const authSuccess = createAction<AuthSuccess>(AUTH.SUCCESS);
const authFailed = createAction<AuthError>(AUTH.ERROR);
const authRegister = createAction<AuthData>(AUTH.REGISTER);
const authRequest = createAction(AUTH.REQUEST);

const createAuthReader = createAction<AddReaderFormData>(AUTH.CREATE_READER);
const createAuthReaderRequest = createAction(AUTH.CREATE_READER_REQUEST);
const createAuthReaderSuccess = createAction<AddReaderSuccess>(AUTH.CREATE_READER_SUCCESS);
const createAuthReaderError = createAction<AddReaderError>(AUTH.CREATE_READER_ERROR);

export { 
    auth, 
    authSuccess, 
    authFailed, 
    authRegister, 
    authRequest, 
    createAuthReader,
    createAuthReaderRequest,
    createAuthReaderSuccess,
    createAuthReaderError,
    AUTH 
};