import { Backdrop } from '../Backdrop/Backdrop';
import { createPortal } from 'react-dom';
import { CloseBtn, CloseImg, ModalBlock } from './Modal.styled';
import close from '../../images/close.png';
import { useSelector } from 'react-redux';
import { getModalContent } from '../../redux/modal/modalSelectors';
import { useModal } from '../../hooks/useModal';

export const Modal = () => {
  const { handleCloseModal, stopPropagation, modalRoot } = useModal();
  const content = useSelector(getModalContent);

  return createPortal(
    <Backdrop closeModal={handleCloseModal}>
      <ModalBlock onClick={stopPropagation}>
        {content}
        <CloseBtn onClick={handleCloseModal}>
          <CloseImg src={close} alt={close} />
        </CloseBtn>
      </ModalBlock>
    </Backdrop>,
    modalRoot
  );
};
