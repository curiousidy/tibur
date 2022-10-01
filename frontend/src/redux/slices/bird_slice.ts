import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Bird, BirdEmptyState } from '../../models/bird_type';

export interface BirdState {
  birds: Bird[];
}

const initialState: BirdState ={
  birds: []
}


export const BirdSlice = createSlice({
  name: 'birds',
  initialState,
  
  reducers: {
    loadBirds: (state, action: PayloadAction<Bird[]>) => {
      state.birds =  action.payload;
      // return action.payload;
    },

    createBird: (state, action:PayloadAction<Bird>) => {
      state.birds = [...state.birds,action.payload];   
    },

    updateBird: (state, action:PayloadAction<Bird>) => {
     state.birds = state.birds.map((bird) => {
      if (bird.id?.toString() === action.payload.id) return action.payload;
      return bird;
     })
    },

    deleteBird: (state,action: PayloadAction<string>) => {
      state.birds = state.birds.filter((bird) => bird.id?.toString() !== action.payload)
    }
  }
})

export const { loadBirds, createBird, updateBird, deleteBird} = BirdSlice.actions;

export default BirdSlice.reducer;