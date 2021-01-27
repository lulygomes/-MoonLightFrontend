/* eslint-disable react/button-has-type */
import React, { useCallback, useEffect, useState } from 'react';
import { FiEdit3, FiUserPlus, FiXCircle } from 'react-icons/fi';

import api from '../../services/api';

import Header from '../../Components/Header';
import ModalAddCustomer from '../../Components/Modal/ModalAddCustomer';
import ModalEditCustomer from '../../Components/Modal/ModalEditCustomer';

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
  const [isModalAddCustomerOpen, setIsModalAddCustomerOpen] = useState(false);
  const [isModalEditCustomerOpen, setIsModalEditCustomerOpen] = useState(false);
  const [customerIdToEdit, setCustomerIdToEdit] = useState('');

  useEffect(() => {
    api
      .get('customers')
      .then(response => {
        setCustomers(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDeleteCustomer = useCallback(
    async (id: string) => {
      await api.delete(`customers/${id}`);
      setCustomers(customers.filter(customer => customer.id !== id));
    },
    [customers],
  );

  const handleEditCustomer = useCallback((id: string) => {
    setCustomerIdToEdit(id);
    setIsModalEditCustomerOpen(true);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <MainHeader>
          <h1>Clientes</h1>
          <button
            className="addCustomer"
            onClick={() => setIsModalAddCustomerOpen(true)}
          >
            <FiUserPlus size={30} />
          </button>
        </MainHeader>
        {isModalAddCustomerOpen && (
          <ModalAddCustomer
            closeModal={setIsModalAddCustomerOpen}
            setCustomers={setCustomers}
          />
        )}
        {isModalEditCustomerOpen && (
          <ModalEditCustomer
            customerId={customerIdToEdit}
            closeModal={setIsModalEditCustomerOpen}
            setCustomers={setCustomers}
          />
        )}

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
                    <td className="tdOptions">
                      <FiEdit3
                        id="editCustomer"
                        size={15}
                        title="Editar"
                        onClick={() => handleEditCustomer(customer.cpf)}
                      />
                      <FiXCircle
                        id="deleteCustomer"
                        size={15}
                        title="Excluir"
                        onClick={() => handleDeleteCustomer(customer.id)}
                      />
                    </td>
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
