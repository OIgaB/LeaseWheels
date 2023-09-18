import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favoriteCars: [],
    },
    reducers: {
        addToFavorite: (state, { payload }) => {
            state.favoriteCars.push(payload);
        },
        removeFromFavorite(state, { payload }) {
            const index = state.favoriteCars.findIndex(car => car.id === payload);
            state.favoriteCars.splice(index, 1); 
        }, // або  state.favoriteArray.filter((car) => car.id !== action.payload);
    }, 
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;