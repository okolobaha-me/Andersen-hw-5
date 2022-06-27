import { Field } from '../Field/Field';
import { Button } from '../../Button/Button';
import { Form, FormOptions } from '../Form.Styled';
import { useForm } from '../../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../redux/user/userOperations';
import { getRequestErrorMessage } from '../../../redux/requestError/requestErrorSelector';
import { Popup } from '../../Popup/Popup';

export const RegistrationForm = () => {
  const { values, handleChange, isSubmitting, close } = useForm();
  const { email, password, name } = values;
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(register({ email, password, name }));
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
          fieldName={'name'}
          value={name}
          placeholder={'Enter your name'}
          type={'text'}
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
            text={'Sign up'}
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
