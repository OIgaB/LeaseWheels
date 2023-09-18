import { createSlice } from "@reduxjs/toolkit";
import { getAllCars, getCarsPerPage, getCarByID } from './carsOperations';

const initialState = {   
    items: [],
    itemById: {},
    isLoading: false,
    error: null,
};

const handlePending = (state) => {
    state.isLoading = true;
}

const handleFulfilledGotAll = (state, { payload }) => {  
    state.isLoading = false;
    state.items = payload;
}

const handleFulfilledGotPerPage = (state, { payload }) => {  
    state.isLoading = false;
    state.items = [...state.items, ...payload];
}

const handleFulfilledGotByID = (state, { payload }) => {
    state.isLoading = false;
    state.itemById = payload;
}

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
}

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllCars.fulfilled, handleFulfilledGotAll)
            .addCase(getCarsPerPage.fulfilled, handleFulfilledGotPerPage)
            .addCase(getCarByID.fulfilled, handleFulfilledGotByID)
            //спільні ф-ції обробки стану pending/rejected:
            .addMatcher(action => action.type.endsWith('/pending'), handlePending)
            .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
    }
});

export const carsReducer = carsSlice.reducer;