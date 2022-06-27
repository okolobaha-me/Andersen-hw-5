import { Routes, Route } from 'react-router';
import { Container } from './BaseStyles.styled';
import { Layout } from './Layout/Layout';
import { Home } from '../pages/Home/Home';
import { AboutUs } from '../pages/AboutUs/AboutUs';
import { Modal } from './Modal/Modal';
import { useApp } from '../hooks/useApp';
import { AboutProduct } from '../pages/AboutProduct/AboutProduct';
import { NotFount } from '../pages/NotFound/NotFount';

export const App = () => {
  const { modalContent } = useApp();

  return (
    <>
      <Container>
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={'about-us'} element={<AboutUs />} />
            <Route path={'product/:productId'} element={<AboutProduct />} />
            <Route path={'*'} element={<NotFount />} />
          </Route>
        </Routes>
      </Container>
      {modalContent && <Modal />}
    </>
  );
};
