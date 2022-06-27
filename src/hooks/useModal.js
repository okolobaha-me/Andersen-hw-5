import { useDispatch } from 'react-redux';
import { closeModal } from '../redux/modal/modlaSlice';
import { useCallback, useEffect, useRef } from 'react';

export const useModal = () => {
  const modalRoot = document.getElementById('ModalRoot');
  const stopPropagation = e => {
    e.stopPropagation();
  };

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const onEscClose = useCallback(e => {
    if (e.key !== 'Escape') return;

    handleCloseModal();
  }, []);

  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (!isFirstLoad.current) return;
    isFirstLoad.current = false;

    window.addEventListener('keydown', onEscClose);
    return () => {
      window.removeEventListener('keydown', onEscClose);
    };
  }, [onEscClose]);

  return { handleCloseModal, stopPropagation, modalRoot };
};
