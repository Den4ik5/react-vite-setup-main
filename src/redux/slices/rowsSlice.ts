import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../interfaces/UserInterface.ts";

const initialState: User[] = []
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        deleteUser: (state, action: PayloadAction<User>) => {
            state = state.filter((el: User) => el.id !== action.payload.id);
        },
        editUser: (state, action: PayloadAction<User>) => {
            const el = state.find(el => el.id === action.payload.id);
            if (el) {
                el.data = action.payload.data;
            } else {
                state.push(action.payload);
            }
        },
        addUser: (state, action: PayloadAction<User>) => {
            state.push(action.payload);
        }
    }
})

export const {
    deleteUser,
    editUser,
    addUser
} = usersSlice.actions;

export default usersSlice.reducer;