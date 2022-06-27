import { getUserId } from '../user/userSelectors';

export const getUserCart = state => state.cart.products[getUserId(state)];

export const getProduct = (state, productId) => {
  const cart = getUserCart(state);
  return cart[productId];
};

export const getTotalQuantity = state => {
  let res = 0;
  const cart = getUserCart(state);
  if (!cart) return res;

  for (const product in cart) {
    res += cart[product].quantity;
  }

  return res;
};

export const getTotalPrice = state => {
  let res = 0;
  const cart = getUserCart(state);

  if (!cart) return res;

  for (const product in cart) {
    res += cart[product].quantity * cart[product].price;
  }

  return res;
};

export const getProductTotalPrice = (state, productId) => {
  const product = getProduct(state, productId);

  return product.quantity * product.price;
};
