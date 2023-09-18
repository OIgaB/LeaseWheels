import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from './carsSlice';
import { favoriteReducer } from './favoriteSlice';
import { filterReducer } from './filterSlice';
import { 
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
 } from 'redux-persist'; 


export const store = configureStore({
    reducer: {
        cars: carsReducer,
        favorite: favoriteReducer,
        filter: filterReducer,
    },
    middleware(getDefaultMiddleware){  
        return getDefaultMiddleware({
            serializableCheck:{
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], 
            }, 
        });
    },
});


export const persistor = persistStore(store); 


