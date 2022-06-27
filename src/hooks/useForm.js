import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../redux/modal/modlaSlice';
import { getIsSubmitting } from '../redux/isSubmitting/isSubmittingSelectors';

export const useForm = () => {
  const [values, setValues] = useState({ email: '', password: '', name: '' });
  const isSubmitting = useSelector(getIsSubmitting);

  const setFieldValue = (fieldName, value) => {
    setValues(prevState => ({ ...prevState, [fieldName]: value }));
  };

  const handleChange = e => {
    const fieldName = e.currentTarget.name;
    let value = e.currentTarget.value;

    setFieldValue(fieldName, value);
  };

  const dispatch = useDispatch();

  const close = () => {
    dispatch(closeModal());
  };

  return { values, handleChange, close, isSubmitting };
};
