import { createSlice } from '@reduxjs/toolkit';
import { saveDataWithExpiration } from '../../../utils';

const initialState = {
    cantProdut:0
};
export const shopCarSlice = createSlice({
    name:'shopCar',
    initialState,
    reducers:{
        addshopCar:(state,action) => {
            saveDataWithExpiration('cantProdut', state.cantProdut + action.payload)
            state.cantProdut= state.cantProdut + action.payload;
        },
        setPredataCountCart: (state, action) => {
            state.cantProdut = action.payload;
        }
    }
})

export const {addshopCar, setPredataCountCart} = shopCarSlice.actions;
export default shopCarSlice.reducer;