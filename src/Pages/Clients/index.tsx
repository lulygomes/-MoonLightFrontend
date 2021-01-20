/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';

import { promises } from 'dns';
import api from '../../services/api';

import Header from '../../Components/Header';

import { Container, List } from './styles';

interface CustomerData {
  id: string;
  name: string;
  phone: string;
  cpf: string;
  address: string;
}

const Clients: React.FC = () => {
  const [customers, setCustomers] = useState<CustomerData[]>([]);

  useEffect(() => {
    api
      .get('customers')
      .then(response => {
        setCustomers(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <Container>
        <h1>Clientes</h1>

        <fieldset>
          <legend>Cadastro de Clientes</legend>

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
        </fieldset>
        <hr />
        <List>
          <h2>Lista de Clientes</h2>

          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Telefone</th>
                <th>CPF</th>
                <th>Endereço</th>
                <th>Opções</th>
              </tr>
            </thead>

            <tbody>
              {customers.map(customer => {
                return (
                  <tr key={customer.id}>
                    <td>{customer.name}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.cpf}</td>
                    <td>{customer.address}</td>
                    <td> -options- </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </List>
      </Container>
    </>
  );
};

export default Clients;
