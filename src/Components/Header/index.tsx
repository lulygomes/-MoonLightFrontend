import React from 'react';

import logo from '../../assetes/image/logo.svg';

import { Container, Nav } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Logo MoonLight" />

      <Nav>
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
      </Nav>
    </Container>
  );
};

export default Header;
