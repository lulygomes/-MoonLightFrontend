/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { FiUserPlus } from 'react-icons/fi';

import api from '../../services/api';

import Header from '../../Components/Header';
import ModalAddCustomer from '../../Components/Modal/ModalAddCustomer';

import { Container, List, MainHeader } from './styles';

interface CustomerData {
  id: string;
  name: string;
  phone: string;
  cpf: string;
  address: string;
}

const Clients: React.FC = () => {
  const [customers, setCustomers] = useState<CustomerData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <MainHeader>
          <h1>Clientes</h1>
          <button className="addCustomer" onClick={() => setIsModalOpen(true)}>
            <FiUserPlus size={30} />
          </button>
        </MainHeader>
        {isModalOpen && <ModalAddCustomer closeModal={setIsModalOpen} />}

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
