import { configureStore } from "@reduxjs/toolkit";
import cordSlice from "./cordSlice";



export const store = configureStore({
    redusers:{
        cord: cordSlice,
    },
}
)