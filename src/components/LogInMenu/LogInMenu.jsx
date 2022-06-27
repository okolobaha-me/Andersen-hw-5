import { Button } from '../Button/Button';
import { MenuWrapper } from '../BaseStyles.styled';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/modlaSlice';

export const LogInMenu = () => {
  const dispatch = useDispatch();

  const handleClick = e => {
    const type = e.target.id;

    dispatch(openModal(type));
  };

  return (
    <MenuWrapper>
      <Button onClick={handleClick} text={'Sign up'} id={'register'} />
      <Button onClick={handleClick} text={'log in'} id={'logIn'} />
    </MenuWrapper>
  );
};
