import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userIdValue: '',
    userPwValue: '',
    userNameValue: ''
};

const signUp = createSlice({
    name: 'signUp',
    initialState,
    reducers: {
        setUserIdValue: (state, action) => {
            state.userIdValue = action.payload;
        },
        setUserPwValue: (state, action) => {
            state.userPwValue = action.payload;
        },
        setUserNameValue: (state, action) => {
            state.userNameValue = action.payload;
        },
    }
});

export const {
    setUserIdValue,
    setUserPwValue,
    setUserNameValue
} = signUp.actions;

export default signUp.reducer;
