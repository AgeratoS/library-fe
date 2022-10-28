import { all } from 'redux-saga/effects';
import {rootSaga as authSaga} from '@/modules/auth';

export default function* rootSaga() {
    yield all([
        authSaga()
    ]);
}