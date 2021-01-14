import React from 'react';

import logo from '../../assetes/image/logo.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Logo MoonLight" />

      <ul>
        <li>
          <a href="/">Vender</a>
        </li>
        <li>
          <a href="/">Caixa</a>
        </li>
        <li>
          <a href="/">Clientes</a>
        </li>
      </ul>
    </Container>
  );
};

export default Header;
