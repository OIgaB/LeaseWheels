import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from "@reduxjs/toolkit";


const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favoriteCars: [],
    },
    reducers: {
        addToFavorite: (state, { payload }) => {
            state.favoriteCars = [...state.favoriteCars, payload];
            // або state.favoriteCars.push(payload);
        },

        removeFromFavorite(state, { payload }) {
            const index = state.favoriteCars.findIndex(car => car.id === payload);
            state.favoriteCars.splice(index, 1); 
        }, // або  state.favoriteCars.filter((car) => car.id !== action.payload);
    }, 
});

const persistConfig = {
    key: 'favorite',
    storage,
}


export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export const favoriteReducer = persistReducer(persistConfig, favoriteSlice.reducer);