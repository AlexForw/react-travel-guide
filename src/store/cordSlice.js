import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    coordinates: {},
    bounds: {},
}

export const cordSlice = createSlice({
    name: 'cord',
    initialState,
    reducers: {
        setBounds: (state, action) => {
            state.bounds = action.payload
        },
        setCoordinates: (state, action) => {
            state.coordinates = action.payload
        },
    }
})

export const { setBounds, setCoordinates } = cordSlice.actions
export default cordSlice.reducer