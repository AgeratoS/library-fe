import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "@/modules/auth";
import { reducers as profileReducer } from "@/modules/profile";
import { reducers as bookReducer } from "@/modules/book";
import { reducers as readerReducer } from '@/modules/reader';
import { reducers as genreReducer } from '@/modules/genre';

export default combineReducers({ 
    auth: authReducer, 
    profile: profileReducer,
    books: bookReducer,
    reader: readerReducer,
    genre: genreReducer
});