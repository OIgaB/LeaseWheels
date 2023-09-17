import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://649088271e6aa71680cb6b00.mockapi.io/';


export const getAllCars = createAsyncThunk(
    'cars/getAll',
    async (page, { rejectWithValue}) => { 
        try {
            const limit = 8; 
            const { data } = await axios.get('/adverts', {
                params: {
                  page,
                  limit,
                },
            });
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getCarByID = createAsyncThunk(
    'cars/getCard',
    async (id, { rejectWithValue}) => { 
        try {
            const { data } = await axios.get(`/adverts/${id}`);
            console.log('data in operat:', data)
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// export const addContact = createAsyncThunk(
//     'contacts/addContact',
//     async (newContact, { rejectWithValue}) => { 
//         try {
//             const data = await postContact(newContact);
//             // console.log(newContact);
//             return data; 
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// );

// export const deleteContact = createAsyncThunk(
//     'contacts/deleteContact',
//     async (contactId, { rejectWithValue}) => { 
//         try {
//             const data = await excludeContact(contactId);
//             return data; 
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// );