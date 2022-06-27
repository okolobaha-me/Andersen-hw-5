import { Outlet } from 'react-router';
import { AppBar } from '../AppBar/AppBar';
import PropTypes from 'prop-types';

export const Layout = ({ logIn, logOut, openModal, cart }) => {
  return (
    <>
      <AppBar logIn={logIn} logOut={logOut} openModal={openModal} cart={cart} />
      <Outlet />
    </>
  );
};

Layout.propTypes = {
  cart: PropTypes.object.isRequired,
  logIn: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
