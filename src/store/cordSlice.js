import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getCities = createAsyncThunk(
    'cord/getCities',
    async function (city, { rejectWithValue }) {
        try {
            const URL = 'https://spott.p.rapidapi.com/places/autocomplete'


            const { data } = await axios.get(URL, {

                params: { limit: '10', skip: '0', q: city, type: 'CITY' },
                headers: {
                    'X-RapidAPI-Host': 'spott.p.rapidapi.com',
                    'X-RapidAPI-Key': 'ef2b898bd6msh61efe35f6e31be6p175661jsn769f45957103'
                }
            })
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


export const getPlacesData = createAsyncThunk(
    'cord/getApi',
    async function (info, { rejectWithValue }) {
        try {
            const URL = `https://travel-advisor.p.rapidapi.com/${info.type}/list-in-boundary`

            const { data: { data } } = await axios.get(URL, {
                params: {
                    bl_latitude: info.sw.lat,
                    tr_latitude: info.ne.lat,
                    bl_longitude: info.sw.lng,
                    tr_longitude: info.ne.lng,
                },
                headers: {
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                    'X-RapidAPI-Key': '633a8c3d09mshd9ed5d30ead881cp17af81jsna64302b52775'
                }
            })

            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


const initialState = {
    coordinates: { lat: 55.7185054, lng: 52.3721038 },
    bounds: {},
    places: [],
    status: null,
    error: null,
    cities: [],
    filterArr: [],
    rating: 0,
    type: 'restaurants',
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
        setFilterArr: (state, action) => {
            state.filterArr = action.payload
        },
        setRating: (state, action) => {
            state.rating = action.payload
        },
        setType: (state, action) => {
            state.type = action.payload
        }
    },
    extraReducers: {
        [getPlacesData.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [getPlacesData.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.places = action.payload.filter((e) => e.name && e.num_reviews)
            state.error = null
        },
        [getPlacesData.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [getCities.fulfilled]: (state, action) => {
            state.cities = action.payload
        },
    }
})

export const { setBounds, setCoordinates, setFilterArr, setRating, setType } = cordSlice.actions
export default cordSlice.reducer