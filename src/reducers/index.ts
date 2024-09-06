import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";


const allReducers = combineReducers({
    auth: authReducer
})


export default allReducers;