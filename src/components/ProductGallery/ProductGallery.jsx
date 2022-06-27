import { useEffect, useRef, useState } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { getProducts } from '../../JS/API';
import { Gallery } from './ProductGallery.styled';
import { Loader } from '../Loader/Loader';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/user/userSelectors';

export const ProductGallery = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useSelector(getIsLoggedIn);

  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (!isFirstLoad) return;
    isFirstLoad.current = false;

    setIsLoading(true);

    getProducts()
      .then(res => {
        setProducts(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Gallery>
          {
            <>
              {products.map(product => {
                const { id, title, price, images } = product;
                return (
                  <ProductCard
                    isLoggedIn={isLoggedIn}
                    price={price}
                    img={images[0]}
                    id={id}
                    title={title}
                    key={id}
                    addToCart={() => {}}
                  />
                );
              })}
            </>
          }
        </Gallery>
      )}
    </>
  );
};
