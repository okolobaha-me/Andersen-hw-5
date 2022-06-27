import { Outlet } from 'react-router';
import { AppBar } from '../AppBar/AppBar';
import PropTypes from 'prop-types';

export const Layout = ({ cart }) => {
  return (
    <>
      <AppBar cart={cart} />
      <Outlet />
    </>
  );
};

Layout.propTypes = {
  cart: PropTypes.object.isRequired,
};
