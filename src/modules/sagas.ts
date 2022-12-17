import { all } from 'redux-saga/effects';
import {rootSaga as authSaga} from '@/modules/auth';
import {sagas as bookSaga} from '@/modules/book';

export default function* rootSaga() {
    yield all([
        authSaga(),
        bookSaga()
    ]);
}