import {createSlice, Slice} from "@reduxjs/toolkit";
import {User} from "../../interfaces";
import {login} from "../../api";


const initialState: { me: User } =
    {
        me: {
            age: 0, email: "", firstName: "", gender: "", id: "", lastName: ""
        }
    }


// export const authSlice = createSlice({
//     name: "auth",
//     initialState: initialState,
//     reducers: {
//         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//         // @ts-expect-error
//         login: (state, userPayload: PayloadAction<User>) => {
//             state = {...userPayload.payload}
//         }
//     },
//     extraReducers: {
//         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//         // @ts-expect-error
//         [loginUser.pending]: (state) => {
//             state.loading = true
//             state.error = null
//         },
//         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//         // @ts-expect-error
//         [loginUser.fulfilled]: (state, {payload}) => {
//             console.log(payload);
//             state.loading = false
//             state.success = true // registration successful
//         },
//         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//         // @ts-expect-error
//         [loginUser.rejected]: (state, {payload}) => {
//             state.loading = false
//             state.error = payload
//         },
//     }
// })

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
// export const {login} = authSlice.actions
export default authSlice.reducer