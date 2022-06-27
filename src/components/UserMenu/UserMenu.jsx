import PropTypes from 'prop-types';
import { Avatar, AvatarWrapper } from './UserMenu.styled';
import { Button } from '../Button/Button';
import { MenuWrapper } from '../BaseStyles.styled';
import { Cart } from '../Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../redux/user/userSelectors';
import { logOut } from '../../redux/user/userSlice';

export const UserMenu = ({ cart }) => {
  const { name, avatar } = useSelector(getUserData);
  const dispatch = useDispatch();

  return (
    <MenuWrapper>
      <span>{name}</span>
      <AvatarWrapper>
        <Avatar src={avatar} alt={name} />
      </AvatarWrapper>
      <Cart cart={cart} />
      <Button onClick={() => dispatch(logOut())} text={'Log out'} />
    </MenuWrapper>
  );
};

UserMenu.propTypes = {
  cart: PropTypes.object.isRequired,
};
