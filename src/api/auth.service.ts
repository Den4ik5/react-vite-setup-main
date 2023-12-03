// import axios from "axios";
// import {createAsyncThunk} from "@reduxjs/toolkit";
//
import {User} from "../interfaces";
//
import axios from "axios";

// const login = (username = 'guest', password = '1234') => {
//     return axios
//         .post(API_URL + "/login", {
//             username,
//             password,
//         })
//         .then((response) => {
//             if (response.data.accessToken) {
//                 localStorage.setItem("user", JSON.stringify(response.data));
//             }
//
//             return response.data;
//         });
// };
//
// export const loginUser = createAsyncThunk(
//     'auth/login',
//     async ({email, password}, {rejectWithValue}) => {
//         try {
//             const config = {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             }
//             await axios.post(
//                 `${API_URL}/auth/login`,
//                 {email, password},
//                 config
//             )
//         } catch (error: any) {
//             if (error.response && error.response.data.message) {
//                 return rejectWithValue(error.response.data.message)
//             } else {
//                 return rejectWithValue(error.message)
//             }
//         }
//     }
// )
import {createAsyncThunk} from "@reduxjs/toolkit";

const API_URL = "http://localhost:3000";

export const login = createAsyncThunk<User, { username: string, password: string }>(
    'auth',

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    async (data: { username: string, password: string }, thunkAPI) => {
        const response = await axios
            .post(API_URL + "/login", data)
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response;
            });
        return response.data
    }
)