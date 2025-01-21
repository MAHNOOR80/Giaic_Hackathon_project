"use client"
import {createSlice,PayloadAction} from '@reduxjs/toolkit';

interface Cartitem{
    _id: any;
    image: string;
    name: string;
    price: number;
  quantity: number;
}


const cartSlice = createSlice({
    name:"Cart",
    initialState: [] as Cartitem[],
    reducers:{
        add(state, action :PayloadAction<Cartitem>){
            state.push(action.payload);
        },
        remove(state , action:PayloadAction<string>){
            return state.filter((item)=>item._id !== action.payload);
        }
    }
})

export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;;