import { Header, Nav, NavigationLink, NavItem } from './AppBar.styled';
import PropTypes from 'prop-types';
import { UserMenu } from '../UserMenu/UserMenu';
import { LogInMenu } from '../LogInMenu/LogInMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/user/userSelectors';

export const AppBar = ({ logOut, openModal, cart }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Header>
      <Nav>
        <NavItem>
          <NavigationLink to={'/'}>Home</NavigationLink>
        </NavItem>
        <NavItem>
          <NavigationLink to={'/about-us'}>About us</NavigationLink>
        </NavItem>
      </Nav>

      {isLoggedIn ? (
        <UserMenu logOut={logOut} openModal={openModal} cart={cart} />
      ) : (
        <LogInMenu openModal={openModal} />
      )}
    </Header>
  );
};

AppBar.propTypes = {
  cart: PropTypes.object.isRequired,
  logIn: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
