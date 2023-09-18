import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from './carsSlice';
import { favoriteReducer } from './favoriteSlice';


export const store = configureStore({
    reducer: {
        cars: carsReducer,
        favorite: favoriteReducer,
    },
});