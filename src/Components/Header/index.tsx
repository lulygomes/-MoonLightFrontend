import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assetes/image/logo.svg';

import { Container, Nav } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Logo MoonLight" />

      <Nav>
        <ul>
          <li>
            <Link to="/">Vender</Link>
          </li>
          <li>
            <Link to="/">Caixa</Link>
          </li>
          <li>
            <Link to="/clients">Clientes</Link>
          </li>
          <li>
            <Link to="/products">Produtos</Link>
          </li>
        </ul>
      </Nav>
    </Container>
  );
};

export default Header;
