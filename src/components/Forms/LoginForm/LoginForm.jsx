import PropTypes from 'prop-types';
import { Field } from '../Field/Field';
import { useForm } from '../../../hooks/useForm';
import { Button } from '../../Button/Button';
import { Form, FormOptions } from '../Form.Styled';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/user/userOperations';

export const LoginForm = ({ closeModal }) => {
  const { values, handleChange, isSubmitting } = useForm();
  const { email, password } = values;
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        onChange={handleChange}
        fieldName={'email'}
        value={email}
        placeholder={'Enter your email'}
        type={'mail'}
      />
      <Field
        onChange={handleChange}
        fieldName={'password'}
        value={password}
        placeholder={'Enter your password'}
        type={'password'}
      />

      <FormOptions>
        <Button
          type={'submit'}
          text={'Log in'}
          onClick={handleSubmit}
          isDisabled={isSubmitting}
        />
        <Button
          type={'button'}
          text={'Cansel'}
          onClick={closeModal}
          isDisabled={isSubmitting}
        />
      </FormOptions>
    </Form>
  );
};

LoginForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
