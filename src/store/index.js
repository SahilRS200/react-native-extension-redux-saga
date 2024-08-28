import createSagaMiddleWare from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers";

const sagaMiddleware = createSagaMiddleWare();
console.log(reducer)
const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
})

export default store;