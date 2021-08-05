import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
    },
    reducers: {
        checkAuth: (state, action) => {
            console.log('console', action.payload);
            state.isAuthenticated = action.payload;
        },
    },
});
export const selectAuth = (state: any) => state.auth.isAuthenticated;
export const { checkAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
