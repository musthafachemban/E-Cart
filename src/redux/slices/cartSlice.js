import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        // functions/logic to add items into cart array
        addToCart : (state, action)=>{
            state.push(action.payload)
        },
         removeFromCart : (state, action)=>{
            return state.filter(item=>item.id!=action.payload)
         },
         // functiions remove all items from cart
         emptyCart : (state)=>{
            return state = []
         }

    }
})

export const {addToCart , removeFromCart , emptyCart} = cartSlice.actions
export default cartSlice.reducer