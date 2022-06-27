import { createSlice } from '@reduxjs/toolkit';
import { logIn, register } from '../user/userOperations';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: { products: {} },
  reducers: {
    addToCart(state, { payload }) {
      const { productId, addQuantity, price, name, userId } = payload;

      if (!state.products[userId]) {
        state.products[userId] = {
          [productId]: {
            quantity: addQuantity,
            price,
            name,
          },
        };
      } else if (!state.products[userId][productId]) {
        state.products[userId][productId] = {
          quantity: addQuantity,
          price,
          name,
        };
      } else {
        state.products[userId][productId] = {
          ...state.products[userId][productId],
          quantity: addQuantity + state.products[userId][productId].quantity,
        };
      }
    },
    clearCart(state, { payload }) {
      state.products[payload] = {};
    },
    removeProductFromCart(state, { payload }) {
      const { userId, productId } = payload;

      delete state.products[userId][productId];
    },
    incrementProductQuantity(state, { payload }) {
      const { userId, productId } = payload;

      state.products[userId][productId].quantity += 1;
    },
    decrementProductQuantity(state, { payload }) {
      const { userId, productId } = payload;
      if (state.products[userId][productId].quantity === 1) {
        delete state.products[userId][productId];
      } else {
        state.products[userId][productId].quantity -= 1;
      }
    },
  },
  extraReducers: {
    [logIn.fulfilled](state, { payload }) {
      const { id } = payload;
      if (!state.products[id]) {
        state.products[id] = {};
      }
    },
    [register.fulfilled](state, { payload }) {
      const { id } = payload;
      if (!state.products[id]) {
        state.products[id] = {};
      }
    },
  },
});

export const {
  addToCart,
  clearCart,
  removeProductFromCart,
  incrementProductQuantity,
  decrementProductQuantity,
} = cartSlice.actions;
