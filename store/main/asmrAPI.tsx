import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    asmrs: [],
    asmr: null,
    loading: false,
    error: null as string | null | undefined,
};

const asmrAPI = createSlice({
    name: 'asmrAPI',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // /asmrAllAPI
        builder
            .addCase(asmrAllAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(asmrAllAPI.fulfilled, (state, action) => {
                state.asmrs = action.payload;
                state.loading = false;
            })
            .addCase(asmrAllAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });

        // asmrOwnedAPI
        builder
            .addCase(asmrOwnedAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(asmrOwnedAPI.fulfilled, (state, action) => {
                state.asmrs = action.payload;
                state.loading = false;
            })
            .addCase(asmrOwnedAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });

        // asmrPurchaseAPI
        builder
            .addCase(asmrPurchaseAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(asmrPurchaseAPI.fulfilled, (state, action) => {
                state.asmr = action.payload;
                state.loading = false;
            })
            .addCase(asmrPurchaseAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    }
});

export const asmrAllAPI = createAsyncThunk(
    '/asmr/all',
    async () => {
        const response = await axios.get('/asmr/all');
        return response.data;
    }
);

export const asmrOwnedAPI = createAsyncThunk(
    '/asmr/{userId}/owned',
    async (userId: string) => {
        const response = await axios.get(`/asmr/?userId=${userId}/owned`);
        return response.data;
    }
);

export const asmrPurchaseAPI = createAsyncThunk(
    '/asmr/purchase',
    async (purchaseDTO: { userId: string; asmrFileName: string; }) => {
        const response = await axios.post(`/asmr/purchase`, purchaseDTO, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    }
);

export default asmrAPI.reducer;
