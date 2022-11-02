import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "@/modules/auth";
import { reducers as profileReducer } from "@/modules/profile";

export default combineReducers({ 
    auth: authReducer, 
    profile: profileReducer 
});