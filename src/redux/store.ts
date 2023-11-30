import {configureStore} from '@reduxjs/toolkit'
import {userApi} from "../api";

export const store = configureStore({
    reducer: {
        users: userApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch