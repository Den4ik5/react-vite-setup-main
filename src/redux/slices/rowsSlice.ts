import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Row} from "../../interfaces/RowInterface.ts";

const initialState: Row[] = []
export const rowsSlice = createSlice({
    name: 'rows',
    initialState,
    reducers: {
        getRows: (state, action: PayloadAction<Row[]>) => {
            // TODO: fetch rows and return state
            // state = {...action.payload};
        },
        deleteRow: (state, action: PayloadAction<Row>) => {
            state = state.filter((el: Row) => el.id !== action.payload.id);
        },
        editRow: (state, action: PayloadAction<Row>) => {
            const el = state.find(el => el.id === action.payload.id);
            if (el) {
                el.data = action.payload.data;
            } else {
                state.push(action.payload);
            }
        },
        addRow: (state, action: PayloadAction<Row>) => {
            state.push(action.payload);
        }
    }
})

export const {
    getRows,
    deleteRow,
    editRow,
    addRow
} = rowsSlice.actions;

export default rowsSlice.reducer;