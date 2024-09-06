import createSagaMiddleWare from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";

import allReducers from "../reducers";
import authSaga from "../saga/authSaga";

const sagaMiddleware = createSagaMiddleWare();
// console.log(reducer)
// const store = configureStore({
//     reducer: allReducers,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
// })
const middlewareCallback = (getDefaultMiddleware) => {
    const newMiddleWare = getDefaultMiddleware().concat(sagaMiddleware);
    console.log(newMiddleWare);
    return newMiddleWare;
}

const store = configureStore({
    reducer: allReducers,
    middleware: middlewareCallback
})
sagaMiddleware.run(authSaga);
export default store;
