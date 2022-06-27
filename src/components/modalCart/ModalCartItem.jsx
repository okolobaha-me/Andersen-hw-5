import { useDispatch, useSelector } from 'react-redux';
import {
  getProduct,
  getProductTotalPrice,
} from '../../redux/cart/cartSelectors';
import {
  Cell,
  DecrementButton,
  DeleteButton,
  IncrementButton,
  Product,
} from './ModalCart.styled';
import { getUserId } from '../../redux/user/userSelectors';
import {
  decrementProductQuantity,
  incrementProductQuantity,
  removeProductFromCart,
} from '../../redux/cart/cartSlice';

export const ModalCartItem = ({ id }) => {
  const product = useSelector(state => getProduct(state, id));
  const totalPrice = useSelector(state => getProductTotalPrice(state, id));
  const { price, name, quantity } = product;
  const userId = useSelector(getUserId);

  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementProductQuantity({ userId, productId: id }));
  };
  const handleDecrement = () => {
    dispatch(decrementProductQuantity({ userId, productId: id }));
  };
  const handleDelete = () => {
    dispatch(removeProductFromCart({ userId, productId: id }));
  };

  return (
    <Product>
      <Cell>{id}</Cell>
      <Cell>{name}</Cell>
      <Cell>{price}</Cell>
      <Cell>
        {quantity}
        <div>
          <IncrementButton onClick={handleIncrement}>+</IncrementButton>
          <DecrementButton onClick={handleDecrement}>-</DecrementButton>
        </div>
      </Cell>
      <Cell>{totalPrice}</Cell>
      <Cell>
        <DeleteButton onClick={handleDelete}>Remove</DeleteButton>
      </Cell>
    </Product>
  );
};
