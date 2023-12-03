import {createSlice, Slice} from "@reduxjs/toolkit";
import {User} from "../../interfaces";
import {login} from "../../api";


const initialState: { me: User } = {
    me: {
        age: 0, email: "", firstName: "", gender: "", id: "", lastName: ""
    }
}


export const authSlice: Slice<{ me: User }> = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(login.fulfilled, (state, action) => {
            // Add user to the state array
            console.log(action.payload);
            state.me = action.payload
        })
    },
})
export default authSlice.reducer