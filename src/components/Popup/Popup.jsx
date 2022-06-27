import PropTypes from 'prop-types';
import { CloseBtn, CloseImg, Message, PopupStyled } from './Popup.styled';
import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import close from '../../images/close.png';
import { useDispatch } from 'react-redux';
import { removeError } from '../../redux/requestError/requestErrorSlice';

export const Popup = ({ message }) => {
  const popupRoot = document.getElementById('PopupRoot');
  const dispatch = useDispatch();

  const closePopup = useCallback(() => {
    dispatch(removeError());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(closePopup, 15000);
    return () => {
      clearTimeout(timer);
    };
  }, [closePopup]);

  return createPortal(
    <PopupStyled>
      <Message>{message}</Message>
      <CloseBtn onClick={closePopup}>
        <CloseImg src={close} alt={close} />
      </CloseBtn>
    </PopupStyled>,
    popupRoot
  );
};

Popup.propTypes = {
  message: PropTypes.string.isRequired,
};
