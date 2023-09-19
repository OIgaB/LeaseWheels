import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://649088271e6aa71680cb6b00.mockapi.io/';


export const getAllCars = createAsyncThunk(
    'cars/getAllCars',
    async (_, { rejectWithValue}) => { 
        try {
            const { data } = await axios.get('/adverts');
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getCarsPerPage = createAsyncThunk(
    'cars/getCars',
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
    'cars/getCar',
    async (id, { rejectWithValue}) => { 
        try {
            const { data } = await axios.get(`/adverts?id=${id}`);
            return data[0];
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);