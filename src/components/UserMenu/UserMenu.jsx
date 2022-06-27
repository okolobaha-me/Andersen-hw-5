import PropTypes from 'prop-types';
import { Avatar, AvatarWrapper } from './UserMenu.styled';
import { Button } from '../Button/Button';
import { MenuWrapper } from '../BaseStyles.styled';
import { Cart } from '../Cart/Cart';
import { useSelector } from 'react-redux';
import { getUserData } from '../../redux/user/userSelectors';

export const UserMenu = ({ logOut, cart }) => {
  const { name, avatar } = useSelector(getUserData);

  return (
    <MenuWrapper>
      <span>{name}</span>
      <AvatarWrapper>
        <Avatar src={avatar} alt={name} />
      </AvatarWrapper>
      <Cart cart={cart} />
      <Button onClick={logOut} text={'Log out'} />
    </MenuWrapper>
  );
};

UserMenu.propTypes = {
  cart: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
};
