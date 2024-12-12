import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../util/axiosInstance';

const initialState = {
    user: null,
    loading: false,
    error: null as string | null | undefined,
};

const token = window.localStorage.getItem('token');

const userAPI = createSlice({
    name: 'userAPI',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // putUser
        builder
            .addCase(putUserAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(putUserAPI.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
            })
            .addCase(putUserAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });

        // deleteUser
        builder
            .addCase(deleteUserAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteUserAPI.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
            })
            .addCase(deleteUserAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    }
});

export const putUserAPI = createAsyncThunk(
    'putUserAPI',
    async (userDTO: { userId: string; userPw: string; userName: string; }) => {
        const response = await axiosInstance(token!).put('/user', userDTO);
        return response.data;
    }
);

export const deleteUserAPI = createAsyncThunk(
    'deleteUserAPI',
    async (userId: string) => {
        const response = await axiosInstance(token!).delete(`/user/${userId}`);
        return response.data;
    }
);

export default userAPI.reducer;
