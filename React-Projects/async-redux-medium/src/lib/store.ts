// src/lib/store.ts

import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './features/users/userSlice'

export const centralStore = () => {
    return configureStore({
        reducer: {
            users: usersReducer
        }
    })
}

export type AppStore = ReturnType<typeof centralStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']