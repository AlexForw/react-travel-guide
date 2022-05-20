import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getPlacesData = createAsyncThunk(
    'cord/getApi',
    async function (info,{rejectWithValue}) {
        try {

            const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

            const { data: { data } } = await axios.get(URL, {
                params: {
                    bl_latitude: info.sw.lat,
                    tr_latitude: info.ne.lat,
                    bl_longitude: info.sw.lng,
                    tr_longitude: info.ne.lng,
                },
                headers: {
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                    'X-RapidAPI-Key': 'ef2b898bd6msh61efe35f6e31be6p175661jsn769f45957103'
                }
            })

            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const initialState = {
    coordinates: {},
    bounds: {},
    places: [],
    status: null,
    error: null,
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
        }
    },
    extraReducers: {
        [getPlacesData.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [getPlacesData.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.places = action.payload
            state.error = null
        },
        [getPlacesData.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    }
})

export const { setBounds, setCoordinates } = cordSlice.actions
export default cordSlice.reducer