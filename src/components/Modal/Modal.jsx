import { Backdrop } from '../Backdrop/Backdrop';
import { createPortal } from 'react-dom';
import { CloseBtn, CloseImg, ModalBlock } from './Modal.styled';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useRef } from 'react';
import close from '../../images/close.png';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/modal/modlaSlice';
import { RegistrationForm } from '../Forms/RegistrationForm/RegistrationForm';
import { LoginForm } from '../Forms/LoginForm/LoginForm';

export const Modal = ({ content }) => {
  const modalRoot = document.getElementById('ModalRoot');
  const stopPropagation = e => {
    e.stopPropagation();
  };

  const dispatch = useDispatch();

  const HandleCloseModal = () => {
    dispatch(closeModal());
  };

  const onEscClose = useCallback(e => {
    if (e.key !== 'Escape') return;

    HandleCloseModal();
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

  return createPortal(
    <Backdrop closeModal={HandleCloseModal}>
      <ModalBlock onClick={stopPropagation}>
        {content === 'logIn' ? <LoginForm /> : <RegistrationForm />}
        <CloseBtn onClick={HandleCloseModal}>
          <CloseImg src={close} alt={close} />
        </CloseBtn>
      </ModalBlock>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  content: PropTypes.string.isRequired,
};
