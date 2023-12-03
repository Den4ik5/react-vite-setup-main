import {User} from "../interfaces";
import axios from "axios";

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