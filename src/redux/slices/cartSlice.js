import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      )

      state.totalQuantity++
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          image: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price)
      }

      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      )
      console.log(state.cartItems)
    },

    deleteItem: (state, action) => {
      const id = action.payload
      const item = state.cartItems.find((item) => item.id === id)

      if (item) {
        state.cartItems.filter((item) => item.id === id)
        state.quantity = state.quantity - item.quantity
      }

      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      )

      console.log(state.cartItems)
    },
  },
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer
