import { useEffect, useRef, useState } from 'react';
import { getUserData, tokenOptions } from '../JS/API';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../redux/user/userOperations';
import { getModalContent } from '../redux/modal/modalSelectors';

export const useApp = () => {
  // cart logic
  const [cart, setCart] = useState({});

  const saveCartToStorage = cart => {
    window.localStorage.setItem(`cart user ${1}`, JSON.stringify(cart));
  };

  const addToCart = (productId, price, addQuantity = 1) => {
    let newCart;

    if (cart[productId]) {
      newCart = {
        ...cart,
        [productId]: {
          quantity: cart[productId].quantity + addQuantity,
          price,
        },
      };
    } else {
      newCart = {
        ...cart,
        [productId]: { quantity: addQuantity, price },
      };
    }

    setCart(newCart);
    saveCartToStorage(newCart);
  };

  // const getCartFromStorage = userId => {
  //   let cart = window.localStorage.getItem(`cart user ${userId}`) || '{}';
  //   cart = JSON.parse(cart);
  //   setCart(cart);
  // };

  const modalContent = useSelector(getModalContent);

  const firstLoad = useRef(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!firstLoad.current) return;
    firstLoad.current = false;

    const token = window.localStorage.getItem('token') || '';
    if (!token) return;
    tokenOptions.set(token);
    getUserData().then(res => {
      dispatch(logIn(res));
    });
  }, []);

  return {
    cart,
    addToCart,
    modalContent,
  };
};
