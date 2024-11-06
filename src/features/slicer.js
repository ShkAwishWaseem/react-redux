import { createSlice } from '@reduxjs/toolkit'


export const AddToCart = createSlice({
     name:"add-to-cart",
     initialState:{
          items:[]
     },
     reducers:{
          addToCart: (state, action) => {
               state.items.push(action.payload)
          }
     }
     
})

export const { addToCart } = AddToCart.actions

export default AddToCart.reducer