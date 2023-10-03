import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filterLocation: '',
        brand: '',
        price: '',
        mileageFrom: '',
        mileageTo: '',        
    },
    reducers: {
        getFilterData: (state, { payload }) => {
            state.filterLocation = payload.filterLocation;
            state.brand = payload.brand;
            state.price = payload.price;
            state.mileageFrom = payload.mileageFrom;
            state.mileageTo = payload.mileageTo;         
        },
    },
});

const persistConfig = {
    key: 'filter',
    storage,
}

export const { getFilterData } = filterSlice.actions;
export const filterReducer = persistReducer(persistConfig, filterSlice.reducer);