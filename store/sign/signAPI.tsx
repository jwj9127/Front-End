import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: null,
    loading: false,
    error: null as string | null | undefined,
    idCheckStatus: null
};

axios.defaults.baseURL = 'http://localhost:8080';

const signAPI = createSlice({
    name: 'signAPI',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // idCheck
        builder
            .addCase(idCheckAPI.pending, (state) => {
                state.loading = true;
                state.idCheckStatus = null;
            })
            .addCase(idCheckAPI.fulfilled, (state, action) => {
                state.idCheckStatus = action.payload;
                state.loading = false;
            })
            .addCase(idCheckAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });

        // signUp
        builder
            .addCase(signUpAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUpAPI.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
            })
            .addCase(signUpAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });

        // signIn
        builder
            .addCase(signInAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signInAPI.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
            })
            .addCase(signInAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    }
});

export const idCheckAPI = createAsyncThunk(
    'sign/idCheckAPI',
    async (userId: string) => {
        const response = await axios.post(`/user/idCheck/?userId=${userId}`);
        return response.data;
    }
);

export const signUpAPI = createAsyncThunk(
    'sign/signUpAPI',
    async (userDTO: { userId: string; userPw: string; userName: string; }) => {
        const response = await axios.post('/user/Signup', userDTO, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    }
);

export const signInAPI = createAsyncThunk(
    'sign/signInAPI',
    async (userDTO: { userId: string; userPw: string; }) => {
        const response = await axios.post('/login', userDTO, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    }
);

export default signAPI.reducer;
