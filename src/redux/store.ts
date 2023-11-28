import {configureStore} from '@reduxjs/toolkit'
import RowsSlice from "./slices/rowsSlice.ts";

export const store = configureStore({
    reducer: {
        rows: RowsSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch