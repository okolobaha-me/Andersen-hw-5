import {
  CartOptions,
  DataWrapper,
  Description,
  Image,
  Price,
  Product,
  QuantitySelector,
  TempImage,
  Title,
} from './AboutProduct.styled';
import { Loader } from '../../components/Loader/Loader';
import { Button } from '../../components/Button/Button';
import photo from '../../images/tempPhoto.png';
import { useAboutProduct } from '../../hooks/useAboutProduct';

export const AboutProduct = () => {
  const {
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
  } = useAboutProduct();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Product>
          {isPhotoLoading && <TempImage src={photo} alt={'temporary photo'} />}
          <Image
            src={images[0]}
            alt={title}
            isLoading={isPhotoLoading}
            onLoad={turnOnRealPhoto}
          />
          <DataWrapper>
            <Title>{title}</Title>
            <Price>Price: {price}</Price>
            <Description>{description}</Description>
            {isLoggedIn ? (
              <CartOptions>
                <QuantitySelector
                  type="number"
                  value={quantity}
                  onChange={e => {
                    setQuantity(Number(e.target.value));
                  }}
                />
                <Button onClick={handleAdd} text={'Add to cart'} />
              </CartOptions>
            ) : (
              <p> Please log in to add something to cart</p>
            )}
          </DataWrapper>
        </Product>
      )}
    </>
  );
};
