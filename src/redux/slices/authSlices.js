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
        },
        profile: (state, { payload }) => {
            state.userInfo = payload.user;
        }
    }
});

export const { logout, login, profile } = authSlice.actions;
export default authSlice.reducer;
