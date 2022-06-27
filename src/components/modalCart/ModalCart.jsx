import { useDispatch, useSelector } from 'react-redux';
import { getTotalPrice, getUserCart } from '../../redux/cart/cartSelectors';
import {
  ButtonsWrapper,
  Cell,
  Product,
  ProductList,
  Total,
} from './ModalCart.styled';
import { ModalCartItem } from './ModalCartItem';
import { Button } from '../Button/Button';
import { clearCart } from '../../redux/cart/cartSlice';
import { getUserId } from '../../redux/user/userSelectors';

export const ModalCart = () => {
  const cart = useSelector(getUserCart);
  const userId = useSelector(getUserId);
  const totalPrice = useSelector(getTotalPrice);
  const productIdes = Object.keys(cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart(userId));
  };

  return (
    <>
      <ProductList>
        {productIdes.length > 0 ? (
          <>
            <Product>
              <Cell>Id</Cell>
              <Cell>Name</Cell>
              <Cell>Price</Cell>
              <Cell>Quantity</Cell>
              <Cell>TotalPrice</Cell>
              <Cell>Delete</Cell>
            </Product>
            {productIdes.map(id => (
              <ModalCartItem key={id} id={id} />
            ))}
          </>
        ) : (
          <h2>You didn't add something to cart yet</h2>
        )}
      </ProductList>

      {productIdes.length > 0 && (
        <>
          <Total>Total price: {totalPrice}</Total>
          <ButtonsWrapper>
            <Button onClick={handleClearCart} text={'Clear cart'} />
            <Button onClick={() => {}} text={'Pay'} isDisabled={true} />
          </ButtonsWrapper>
        </>
      )}
    </>
  );
};
