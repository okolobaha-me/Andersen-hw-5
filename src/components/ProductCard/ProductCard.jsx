import PropTypes from 'prop-types';
import {
  Card,
  Dollar,
  Image,
  ProductDataWrapper,
  TempImage,
  Title,
} from './ProductCard.styled';
import { Button } from '../Button/Button';
import photo from '../../images/tempPhoto.png';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn, getUserId } from '../../redux/user/userSelectors';
import { addToCart } from '../../redux/cart/cartSlice';

export const ProductCard = ({ id, title, price, img }) => {
  const [isLoading, setIsLoading] = useState(true);

  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const userId = useSelector(getUserId);

  const handleAdd = () => {
    dispatch(
      addToCart({ productId: id, addQuantity: 1, price, name: title, userId })
    );
  };

  const turnOnRealPhoto = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <Card>
      {isLoading && <TempImage src={photo} alt={'temporary photo'} />}
      <Image
        src={img}
        alt={title}
        isLoading={isLoading}
        onLoad={turnOnRealPhoto}
      />
      <ProductDataWrapper>
        <Title to={`product/${id}`}>{title}</Title>
        <p>
          Prise <Dollar>{price}$</Dollar>
        </p>
        {isLoggedIn ? (
          <Button onClick={handleAdd} text={'Add to cart'} />
        ) : (
          <p> Please log in to add something to cart</p>
        )}
      </ProductDataWrapper>
    </Card>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
