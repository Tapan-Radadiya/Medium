import { getUsersDataApi } from "./usersApi";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IUserTable } from "./userSlice";

const extraReducers = (builder: ActionReducerMapBuilder<IUserTable>) => {
    builder.addCase(getUsersDataApi.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.user = action.payload.userList
    })
    builder.addCase(getUsersDataApi.pending, (state) => {
        state.loading = true
        state.error = null
    })
    builder.addCase(getUsersDataApi.rejected, (state, action) => {
        state.loading = true
        state.error = action.error.message || "Failed To Fetch User List From Backend"
    })
}

export default extraReducers