import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../util/axiosInstance';

const initialState = {
    list: null,
    loading: false,
    error: null as string | null | undefined,
};

const token = window.localStorage.getItem('token');

const musicAPI = createSlice({
    name: 'musicAPI',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // getUserList
        builder
            .addCase(getUserListAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUserListAPI.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(getUserListAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });

        // getCategory
        builder
            .addCase(getCategoryAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCategoryAPI.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(getCategoryAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });

        // addListByCategory
        builder
            .addCase(addListByCategoryAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addListByCategoryAPI.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(addListByCategoryAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });

        // addListByUrl
        builder
            .addCase(addListByUrlAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addListByUrlAPI.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(addListByUrlAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });

        // addListByAi
        builder
            .addCase(addListByAiAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addListByAiAPI.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(addListByAiAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });

        // deleteList
        builder
            .addCase(deleteListAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteListAPI.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(deleteListAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });

        // saveHistory
        builder
            .addCase(saveHistoryAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(saveHistoryAPI.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(saveHistoryAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    }
});

export const getUserListAPI = createAsyncThunk(
    'getUserListAPI',
    async (userId: string) => {
        const response = await axiosInstance(token!).get(`/playlist/${userId}`);
        return response.data;
    }
);

export const getCategoryAPI = createAsyncThunk(
    'getCategoryAPI',
    async (keyword: string) => {
        const response = await axiosInstance(token!).get(`/api/youtube/search/${keyword}`);
        return response.data;
    }
);

export const addListByCategoryAPI = createAsyncThunk(
    'addListByCategoryAPI',
    async (categoryDTO: { userId: string; keywordOrGenre: string; }) => {
        const response = await axiosInstance(token!).post(`/playlist/add-genre`, categoryDTO);
        return response.data;
    }
);

export const addListByUrlAPI = createAsyncThunk(
    'addListByUrlAPI',
    async (categoryDTO: { userId: string; videoUrl: string; }) => {
        const response = await axiosInstance(token!).post(`/playlist/add-url`, categoryDTO);
        return response.data;
    }
);

export const addListByAiAPI = createAsyncThunk(
    'addListByAiAPI',
    async (categoryDTO: { userId: string; keywordOrGenre: string; }) => {
        const response = await axiosInstance(token!).post(`/playlist/add-ai`, categoryDTO);
        return response.data;
    }
);

export const deleteListAPI = createAsyncThunk(
    'deleteListAPI',
    async (categoryDTO: { userId: string; videoId: string; }) => {
        const response = await axiosInstance(token!).delete(`/playlist/remove`, {
            data: categoryDTO
        });
        return response.data;
    }
);

export const saveHistoryAPI = createAsyncThunk(
    'saveHistoryAPI',
    async (categoryDTO: { userId: string; keywordOrGenre: string; }) => {
        const response = await axiosInstance(token!).post(`/playhistory/save`, categoryDTO);
        return response.data;
    }
);

export default musicAPI.reducer;
