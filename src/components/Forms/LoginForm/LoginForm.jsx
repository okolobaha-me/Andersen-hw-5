import { Field } from '../Field/Field';
import { useForm } from '../../../hooks/useForm';
import { Button } from '../../Button/Button';
import { Form, FormOptions } from '../Form.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../../redux/user/userOperations';
import { Popup } from '../../Popup/Popup';
import { getRequestErrorMessage } from '../../../redux/requestError/requestErrorSelector';

export const LoginForm = () => {
  const { values, handleChange, isSubmitting, close } = useForm();
  const { email, password } = values;
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };

  const popupMessage = useSelector(getRequestErrorMessage);

  return (
    <>
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
            onClick={close}
            isDisabled={false}
          />
        </FormOptions>
      </Form>
      {popupMessage && <Popup message={popupMessage} />}
    </>
  );
};
