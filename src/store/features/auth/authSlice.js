import { createSlice } from "@reduxjs/toolkit";


const initState = {
    user: "",
    token :""
}

const authSlice = createSlice({
    name:"auth",
    initialState: initState,
    reducers: {
        setCredinitail: (state, action) => {
            
            state.token = action.payload.token
            state.user = action.payload.user
        },
        logout: (state) => {
            state.token = null
            state.user = null
        }
    }
})


export default authSlice.reducer
export const { setCredinitail, logout } = authSlice.actions
export const selectUser = state => state.auth.user
export const selectToken  = state => state.auth.token
