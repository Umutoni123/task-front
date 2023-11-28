import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    userInfo: {},
    userToken: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.userInfo = {};
            state.userToken = null;
        },
        login: (state, { payload }) => {
            state.loading = false;
            state.userInfo = payload.userInfo;
            state.userToken = payload.token;
        }
    }
});

export const { logout, login } = authSlice.actions;
export default authSlice.reducer;
