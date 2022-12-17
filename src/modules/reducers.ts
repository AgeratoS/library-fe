import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "@/modules/auth";
import { reducers as profileReducer } from "@/modules/profile";
import { reducers as bookReducer } from "@/modules/book";

export default combineReducers({ 
    auth: authReducer, 
    profile: profileReducer,
    books: bookReducer
});