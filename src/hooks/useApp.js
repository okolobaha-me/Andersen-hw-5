import { useCallback, useRef, useState } from 'react';
import { LoginForm } from '../components/Forms/LoginForm/LoginForm';
import { RegistrationForm } from '../components/Forms/RegistrationForm/RegistrationForm';

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

  // popup logic
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent('');
  };

  // const openPopup = errMessage => {
  //   setPopupContent(errMessage);
  //   setIsPopupOpen(true);
  // };

  // modal logic
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setModalContent(null);
  }, []);

  const openModal = async type => {
    const modalContent =
      type === 'logIn' ? (
        <LoginForm onSubmit={() => {}} closeModal={closeModal} />
      ) : (
        <RegistrationForm onSubmit={() => {}} closeModal={closeModal} />
      );
    await setModalContent(modalContent);
    setIsModalOpen(true);
  };

  // const firstLoad = useRef(true);

  //  useEffect(() => {
  //   if (!firstLoad.current) return;
  //   firstLoad.current = false;
  //
  //   const token = window.localStorage.getItem('token') || '';
  //   if (!token) return;
  //   tokenOptions.set(token);
  //   getUserData().then(setUserData);
  // }, []);

  return {
    openModal,
    isModalOpen,
    isPopupOpen,
    modalContent,
    closeModal,
    closePopup,
    popupContent,
    cart,
    addToCart,
  };
};
