// src/lib/features/users/userSlice.ts

import { createSlice } from "@reduxjs/toolkit"
import extraReducers from "./extraReducers"

export interface IUserData {
    id: string,
    name: string,
    maths: number | null,
    english: number | null
}

export interface IUserTable {
    user: IUserData[],
    loading: boolean,
    error: string | null
}

const initialState: IUserTable = {
    user: [],
    loading: false, // Add State To Control Loading
    error: null // Add State To Control Errors
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}, // Do not write async code here..
    extraReducers // Async Operations here
})

export const {} = userSlice.actions
export default userSlice.reducer