import { createSlice } from "@reduxjs/toolkit";
import { getAllCars, getCarByID } from './carsOperations';

const initialState = {   
    items: [],
    itemById: {},
    isLoading: false,
    error: null,
};

const handlePending = (state) => {
    state.isLoading = true;
}

const handleFulfilledGot = (state, { payload }) => {  // payload - масив об'єктів
    state.isLoading = false;
    // state.items = payload;
    state.items = [...state.items, ...payload];
}

const handleFulfilledGotByID = (state, { payload }) => {
    state.isLoading = false;
    state.item = payload;
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
            .addCase(getAllCars.fulfilled, handleFulfilledGot)
            .addCase(getCarByID.fulfilled, handleFulfilledGotByID)
            // .addCase(addContact.fulfilled, handleFulfilledAdded)
            // .addCase(deleteContact.fulfilled, handleFulfilledDeleted)
            //спільні ф-ції обробки стану pending/rejected:
            .addMatcher(action => action.type.endsWith('/pending'), handlePending)
            .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
    }
});

export const carsReducer = carsSlice.reducer;