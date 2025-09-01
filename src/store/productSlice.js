import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  productsList: [],
  cartItems: [],
}

const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.productsList = action.payload
    },

    addToCart: (state, action) => {
      let newSortedCart = [...state.cartItems, ...state.productsList.filter(item => item.id === action.payload)]
      newSortedCart.sort((a, b) => a.price - b.price)
      state.cartItems = newSortedCart
    }
  },
})

export const {setProducts, addToCart} = productsSlice.actions
export default productsSlice.reducer
