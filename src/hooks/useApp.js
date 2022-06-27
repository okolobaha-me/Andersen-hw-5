import { useEffect, useRef } from 'react';
import { getUserData, tokenOptions } from '../JS/API';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../redux/user/userOperations';
import { getModalContent } from '../redux/modal/modalSelectors';

export const useApp = () => {
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
  }, [dispatch]);

  return {
    modalContent,
  };
};
