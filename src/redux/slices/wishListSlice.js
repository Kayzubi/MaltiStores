import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishList: [],
  totalQuantity: 0,
}

const wishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload
      const existingItem = state.wishList.find((item) => item.id === newItem.id)

      if (!existingItem) {
        state.totalQuantity++
        state.wishList.push({
          id: newItem.id,
          productName: newItem.productName,
          image: newItem.imgUrl,
          price: newItem.price,
        })
      }
    },

    deleteItem: (state, action) => {
      const id = action.payload
      state.wishList = state.wishList.filter((item) => item.id !== id)
      state.totalQuantity--
    },

    clearAll: (state) => {
      state.wishList = initialState
      state.totalQuantity = 0
    },
  },
})

export const wishActions = wishListSlice.actions

export default wishListSlice.reducer
