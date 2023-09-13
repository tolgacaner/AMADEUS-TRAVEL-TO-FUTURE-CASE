import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import flightService from './flightService'



const initialState = {
    data: [],
    departureFlight: null,
    returnFlight: null,
    departureDate: null,
    oneway: false,

    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}




export const getFlights = createAsyncThunk(
    'flights/getAll',
    async (e, thunkAPI) => {
        try {
            return await flightService.getFlights(e)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)




export const flightSlice = createSlice({
    name: 'flight',
    initialState,
    reducers: {
        onewayToggle: (state) => {
            state.oneway = !state.oneway
            state.returnFlight = null
        },
        adddepartureDate: (state, action) => {
            state.departureDate = action.payload
        },
        adddepartureFlight: (state, action) => {
            state.departureFlight = action.payload
        },
        adddereturnFlight: (state, action) => {
            state.returnFlight = action.payload
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(getFlights.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getFlights.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.data = action.payload
            })
            .addCase(getFlights.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }


})

export const { onewayToggle, adddepartureDate, adddepartureFlight, adddereturnFlight } = flightSlice.actions
export default flightSlice.reducer