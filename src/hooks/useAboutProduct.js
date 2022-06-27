import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn, getUserId } from '../redux/user/userSelectors';
import { getProductDetails } from '../JS/API';
import { addToCart } from '../redux/cart/cartSlice';

export const useAboutProduct = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isPhotoLoading, setIsPhotoLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const { productId } = useParams();
  const isFirstLoad = useRef(true);
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    if (!isFirstLoad) return;
    isFirstLoad.current = false;

    setIsLoading(true);

    getProductDetails(productId)
      .then(res => {
        setProduct(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [productId]);

  const {
    id = '',
    title = '',
    price = '',
    description = '',
    images = '',
  } = product;

  const dispatch = useDispatch();
  const userId = useSelector(getUserId);

  const handleAdd = () => {
    dispatch(
      addToCart({
        productId: id,
        addQuantity: quantity,
        price,
        name: title,
        userId,
      })
    );
  };

  const turnOnRealPhoto = useCallback(() => {
    setIsPhotoLoading(false);
  }, []);

  return {
    isLoading,
    isPhotoLoading,
    images,
    title,
    turnOnRealPhoto,
    price,
    description,
    isLoggedIn,
    quantity,
    setQuantity,
    handleAdd,
  };
};
