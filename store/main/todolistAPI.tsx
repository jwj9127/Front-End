import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../util/axiosInstance';

const initialState = {
    todos: [],
    todo: null,
    loading: false,
    error: null as string | null | undefined,
};

const token = window.localStorage.getItem('token');

const todolistAPI = createSlice({
    name: 'todolistAPI',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // getTodoAPI
        builder
            .addCase(getTodoAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getTodoAPI.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.loading = false;
            })
            .addCase(getTodoAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });

        // addTodoAPI
        builder
            .addCase(addTodoAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addTodoAPI.fulfilled, (state, action) => {
                state.todo = action.payload;
                state.loading = false;
            })
            .addCase(addTodoAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });

        // completedTodoAPI
        builder
            .addCase(completedTodoAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(completedTodoAPI.fulfilled, (state, action) => {
                state.todo = action.payload;
                state.loading = false;
            })
            .addCase(completedTodoAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });

        // putTodoAPI
        builder
            .addCase(putTodoAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(putTodoAPI.fulfilled, (state, action) => {
                state.todo = action.payload;
                state.loading = false;
            })
            .addCase(putTodoAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });

        // deleteTodoAPI
        builder
            .addCase(deleteTodoAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteTodoAPI.fulfilled, (state, action) => {
                state.todo = action.payload;
                state.loading = false;
            })
            .addCase(deleteTodoAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });

        // deleteAllTodoAPI
        builder
            .addCase(deleteAllTodoAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteAllTodoAPI.fulfilled, (state, action) => {
                state.todo = action.payload;
                state.loading = false;
            })
            .addCase(deleteAllTodoAPI.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    }
});

export const getTodoAPI = createAsyncThunk(
    'getTodoAPI',
    async (userId: string) => {
        const response = await axiosInstance(token!).get(`/todo/${userId}`);
        return response.data;
    }
);

export const addTodoAPI = createAsyncThunk(
    'addTodoAPI',
    async (todoDTO: { userId: string; title: string; }) => {
        const response = await axiosInstance(token!).post('/todo', todoDTO);
        return response.data;
    }
);

export const completedTodoAPI = createAsyncThunk(
    'completedTodoAPI',
    async (todoDTO: { id: string; completed: boolean; }) => {
        const response = await axiosInstance(token!).post('/todo/status', todoDTO);
        return response.data;
    }
);

export const putTodoAPI = createAsyncThunk(
    'putTodoAPI',
    async (todoDTO: { id: string; title: string; }) => {
        const response = await axiosInstance(token!).put('/todo', todoDTO);
        return response.data;
    }
);

export const deleteTodoAPI = createAsyncThunk(
    'deleteTodoAPI',
    async (id: string) => {
        const response = await axiosInstance(token!).delete(`/todo/${id}`);
        return response.data;
    }
);

export const deleteAllTodoAPI = createAsyncThunk(
    'deleteAllTodoAPI',
    async (ids: string[]) => {
        const response = await axiosInstance(token!).delete('/todo/del_list', {
            data: ids
        });
        return response.data;
    }
);

export default todolistAPI.reducer;
