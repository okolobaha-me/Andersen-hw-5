import styled from '@emotion/styled';

export const ProductList = styled.ul`
  margin: 0;
  padding: 20px 0 0;
  margin-bottom: 10px;
`;

export const Product = styled.li`
  list-style: none;
  padding: 10px;
  border: 1px solid #858585;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 20px 2fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Cell = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  :not(:last-child) {
    border-right: 1px solid #858585;
  }
`;

export const IncrementButton = styled.button`
  padding: 5px 10px;
  color: white;
  border: none;
  background-color: #007efd;
  border-radius: 50% 0 0 50%;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #0256af;
  }
`;

export const DecrementButton = styled.button`
  padding: 5px 10px;
  color: white;
  border: none;
  background-color: #007efd;
  border-radius: 0 50% 50% 0;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #0256af;
  }
`;

export const DeleteButton = styled.button`
  color: white;
  border: none;
  background-color: #007efd;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #0256af;
  }
`;

export const Total = styled.p`
  text-align: end;
  //margin-left: auto;
  margin-right: 0;
`;

export const ButtonsWrapper = styled.div`
  justify-content: center;
  display: flex;
  gap: 20px;
`;
