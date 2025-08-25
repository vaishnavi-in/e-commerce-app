import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  productsList: [],
}

const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.productsList = action.payload
    },
  },
})

export const {setProducts} = productsSlice.actions
export default productsSlice.reducer
