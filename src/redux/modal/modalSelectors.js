import { RegistrationForm } from '../../components/Forms/RegistrationForm/RegistrationForm';
import { LoginForm } from '../../components/Forms/LoginForm/LoginForm';
import { ModalCart } from '../../components/modalCart/ModalCart';

export const getModalContent = state => {
  const content = state.modal.content;

  if (!content) return content;

  switch (content) {
    case 'register':
      return <RegistrationForm />;
    case 'logIn':
      return <LoginForm />;
    case 'cart':
      return <ModalCart />;
    default:
      break;
  }
};
