import { CartStyled, Data, DataWrapper, Header } from './Cart.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTotalPrice,
  getTotalQuantity,
} from '../../redux/cart/cartSelectors';
import { openModal } from '../../redux/modal/modlaSlice';

export const Cart = () => {
  const totalQuantity = useSelector(state => getTotalQuantity(state));
  const totalPrice = useSelector(state => getTotalPrice(state));
  const dispatch = useDispatch();

  const openCart = () => {
    dispatch(openModal('cart'));
  };

  return (
    <CartStyled>
      <Header onClick={openCart}>Cart:</Header>
      <DataWrapper>
        <Data>
          Quantity: <span>{totalQuantity}</span>
        </Data>
        <Data>
          Total price: <span>{totalPrice}</span>
        </Data>
      </DataWrapper>
    </CartStyled>
  );
};
