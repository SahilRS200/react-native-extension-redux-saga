import { createSlice } from "@reduxjs/toolkit";
import { GET_LOGIN_STATUS, SET_LOGIN_STATUS } from "../actions/authActions";
import { Action } from "../utils/types";


// const authSlice = createSlice({
//     name: 'auth',
//     initialState: {
//         isLoggedIn: false
//     },
//     reducers: {
//         setLoggedInStatus: (state, action) => {
//             const { isLoggedIn } = action.payload
//             return {
//                 ...state,
//                 isLoggedIn
//             }
//         }
//     }
// })

// const reducer = {
//     auth: authSlice.reducer
// }

// export default reducer;



const initialState = {
    isLoggedIn: false,
    loading: false,
    isError: false
}


const authReducer = (state = initialState, action: Action) => {
    console.log('in auth reducer', action)
    const { type, payload } = action;
    switch(type) {
        case GET_LOGIN_STATUS:
            return { ...state,  loading: true }
        case SET_LOGIN_STATUS:
            return { ...state, ...payload}
        default:
            return state;
    }
}

export default authReducer;