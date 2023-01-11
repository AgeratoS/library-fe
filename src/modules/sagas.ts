import { all } from 'redux-saga/effects';
import { rootSaga as authSaga } from '@/modules/auth';
import { sagas as bookSaga } from '@/modules/book';
import { sagas as readerSaga } from '@/modules/reader';
import { sagas as genreSaga } from '@/modules/genre';
import { sagas as profileSaga } from '@/modules/profile';

export default function* rootSaga() {
    yield all([
        authSaga(),
        bookSaga(),
        readerSaga(),
        genreSaga(),
        profileSaga()
    ]);
}