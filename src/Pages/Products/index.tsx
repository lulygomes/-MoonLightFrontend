import React from 'react';

import Header from '../../Components/Header';

import { Container } from './styles';

const Products: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Produtos</h1>
      </Container>
    </>
  );
};

export default Products;
