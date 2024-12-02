import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    asmrs: [],
    asmr: null,
    loading: false,
    error: null as string | null | undefined,
};

axios.defaults.baseURL = 'http://localhost:8080';

const calendarAPI = createSlice({
    name: 'calendarAPI',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // makeCalendarAPI
        builder
            .addCase(makeCalendarAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(makeCalendarAPI.fulfilled, (state, action) => {
                state.asmrs = action.payload;
                state.loading = false;
            })
            .addCase(makeCalendarAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });

        // getCalendarAPI
        builder
            .addCase(getCalendarAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCalendarAPI.fulfilled, (state, action) => {
                state.asmrs = action.payload;
                state.loading = false;
            })
            .addCase(getCalendarAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });

        // putCalendarAPI
        builder
            .addCase(putCalendarAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(putCalendarAPI.fulfilled, (state, action) => {
                state.asmr = action.payload;
                state.loading = false;
            })
            .addCase(putCalendarAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });

        // deleteCalendarAPI
        builder
            .addCase(deleteCalendarAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteCalendarAPI.fulfilled, (state, action) => {
                state.asmr = action.payload;
                state.loading = false;
            })
            .addCase(deleteCalendarAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    }
});

export const makeCalendarAPI = createAsyncThunk(
    '/calendar',
    async (calendarDTO: { userId: string; title: string; startDay: Date; endDay: Date; }) => {
        const response = await axios.post('/calendar', calendarDTO);
        return response.data;
    }
);

export const getCalendarAPI = createAsyncThunk(
    '/calendar/{userId}',
    async (userId: string) => {
        const response = await axios.get(`/calendar/${userId}`);
        return response.data;
    }
);

export const putCalendarAPI = createAsyncThunk(
    '/calendar/{calendar_id}',
    async ({ calendar_id, calendarDTO }: { calendar_id: string; calendarDTO: { title: string; content: string; startDay: Date; endDay: Date; } }) => {
        const response = await axios.put(`/calendar/${calendar_id}`, calendarDTO, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    }
);

export const deleteCalendarAPI = createAsyncThunk(
    '/calendar/deleteCalendar',
    async (calendar_id: string) => {
        const response = await axios.get(`/calendar/${calendar_id}`);
        return response.data;
    }
);

export default calendarAPI.reducer;