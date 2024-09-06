import { call, put, takeEvery } from "redux-saga/effects";
import { GET_LOGIN_STATUS, setLoginStatus } from "../actions/authActions";
import { AuthData } from "../utils/types";


const mockCheckLogin = () => {
    return new Promise((res,rej) => {
        setTimeout(() => {
            res({
                isLoggedIn: true
            })
        }, 2000);
    })
}

function* workerCheckLogin() {
    console.log('in auth saga')
    const data: AuthData = yield call(mockCheckLogin);
    console.log(data);
    yield put(setLoginStatus(data))
}

function* authSaga() {
    yield takeEvery(GET_LOGIN_STATUS, workerCheckLogin)
}

export default authSaga;