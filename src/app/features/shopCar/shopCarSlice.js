import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cantProdut:0
};
export const shopCarSlice = createSlice({
    name:'shopCar',
    initialState,
    reducers:{
        addshopCar:(state,action) =>{
            state.cantProdut= state.cantProdut + action.payload;
        }
    }
})

export const {addshopCar} = shopCarSlice.actions;
export default shopCarSlice.reducer;