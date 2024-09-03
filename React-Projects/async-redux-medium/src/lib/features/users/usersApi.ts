// src/lib/features/users/usersApi.ts
//  Add All Your Api's Here

import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserData } from "./userSlice";
import axios from "axios";

// For Fetch Request ------------------------------------------------------------------------------------------
const getUsersDataApi = createAsyncThunk(
    'users/allUsers',
    async (_thunkApi, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:3000/allusers')
            // Handle Backend Errors Here
            if (!response.ok) {
                return rejectWithValue({ message: "Error In Fetching Data" })
            }
            const userList = await response.json()
            return { userList } as { userList: IUserData[] }
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

// For Axios Request ------------------------------------------------------------------------------------------
const getUsersDataApi2 = createAsyncThunk(
    'users/allUsers',
    async (_thunkApi, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:3000/allusers')
            // Handle Backend Errors Here
            if (response.status !== 200) {
                return rejectWithValue({ message: "Error In Fetching Data" })
            }
            return { userList: response.data } as { userList: IUserData[] }
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

export { getUsersDataApi }