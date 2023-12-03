import {configureStore} from '@reduxjs/toolkit'
import {userApi} from "../api";
import {authSlice} from "./slices/authSlice.ts";

export const store = configureStore({
    reducer: {
        users: userApi.reducer,
        auth: authSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch