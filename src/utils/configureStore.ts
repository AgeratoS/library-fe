import createSagaMiddleware from "redux-saga";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { rootSaga, rootReducer } from "@/modules";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    debug: process.env.NODE_ENV === 'development',
    blacklist: ['books'],
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [sagaMiddleware],
    devTools: process.env.NODE_ENV !== 'production'
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;