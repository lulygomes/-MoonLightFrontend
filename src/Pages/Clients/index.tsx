/* eslint-disable react/button-has-type */
import React from 'react';

import Header from '../../Components/Header';

import { Container } from './styles';

const Clients: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Clientes</h1>

        <h2>Cadastro de Clientes</h2>
        <form>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Telefone com DDD" />
          <input type="text" placeholder="CPF" />
          <input type="text" placeholder="Endereço completo" />

          <button id="submit" type="submit">
            Salvar
          </button>
          <button id="reset" type="reset">
            Cancelar
          </button>
        </form>
      </Container>
    </>
  );
};

export default Clients;
