import { configureStore } from '@reduxjs/toolkit';
import signSwitch from './sign/signSwitch';
import signAPI from './sign/signAPI';
import backgrounAPI from './main/backgrounAPI';
import asmrAPI from './main/asmrAPI';

export const store = configureStore({
    reducer: {
        signSwitch: signSwitch,
        signAPI: signAPI,
        backgroundAPI: backgrounAPI,
        asmrAPI: asmrAPI
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
