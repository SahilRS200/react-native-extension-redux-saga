import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        setLoggedInStatus: (state, action) => {
            const { isLoggedIn } = action.payload
            return {
                ...state,
                isLoggedIn
            }
        }
    }
})

const reducer = {
    auth: authSlice.reducer
}

export default reducer;
