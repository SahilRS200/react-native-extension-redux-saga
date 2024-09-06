import { AuthData } from "../utils/types";

export const GET_LOGIN_STATUS = 'GET_LOGIN_STATUS';
export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';

// export const getLoginStatus = () => ({
//     type: GET_LOGIN_STATUS
// })

export const getLoginStatus = () => {
    console.log('in action');

    return {
        type: GET_LOGIN_STATUS
    }
}

export const setLoginStatus = (data: AuthData) => {
    console.log('in set login status', data);
    return {
        type: SET_LOGIN_STATUS,
        payload: {
            ...data,
            loading: false,
            isError: false
        }
    }
}