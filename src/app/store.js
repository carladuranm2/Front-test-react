import { configureStore } from '@reduxjs/toolkit';
import shopCarSliceReducer from './features/shopCar/shopCarSlice';

export const store = configureStore({
    reducer: {
        shopCar: shopCarSliceReducer,
    },
});
