import { ProductGallery } from '../../components/ProductGallery/ProductGallery';
import PropTypes from 'prop-types';

export const Home = ({ addToCart }) => {
  return <ProductGallery addToCart={addToCart} />;
};

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
};
