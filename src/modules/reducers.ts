import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "@/modules/auth";

export default combineReducers({ auth: authReducer })