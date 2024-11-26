import { configureStore } from '@reduxjs/toolkit';
import signSwitch from './sign/signSwitch';
import signAPI from './sign/signAPI';
import backgrounAPI from './main/backgrounAPI';

export const store = configureStore({
    reducer: {
        signSwitch: signSwitch,
        signAPI: signAPI,
        backgroundAPI: backgrounAPI
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
