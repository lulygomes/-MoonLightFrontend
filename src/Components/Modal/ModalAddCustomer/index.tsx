/* eslint-disable react/prop-types */
import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { Form } from '@unform/web';
import { FiCreditCard, FiHome, FiPhone, FiUser } from 'react-icons/fi';

import api from '../../../services/api';

import { useToast } from '../../../hooks/toast';
import Input from '../../Input';

import { Modal, Container, ActionButton } from './styles';

interface CustomerData {
  id: string;
  name: string;
  phone: string;
  cpf: string;
  address: string;
}

interface ModalData {
  closeModal: Dispatch<SetStateAction<boolean>>;
  setCustomers: React.Dispatch<React.SetStateAction<CustomerData[]>>;
}

interface CustomerData {
  name: string;
  cpf: string;
  phone: string;
  address: string;
}

const ModalAddCustomer: React.FC<ModalData> = ({
  closeModal,
  setCustomers,
}) => {
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: CustomerData) => {
      try {
        const response = await api.post('customers', data);

        addToast({
          type: 'success',
          title: 'Cliente cadastrado com sucesso!',
        });

        setCustomers(current => [...current, response.data]);
        closeModal(false);
      } catch {
        addToast({
          type: 'error',
          title: 'Falha no cadastro',
          description:
            'Falha ao tentar cadastra um novo cliente, tente novamente.',
        });
        closeModal(false);
      }
    },
    [addToast, closeModal, setCustomers],
  );

  return (
    <Modal>
      <Container>
        <h2>Cadastro de cliente</h2>
        <Form onSubmit={handleSubmit} action="">
          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input
            name="phone"
            icon={FiPhone}
            type="text"
            placeholder="Telefone com DDD"
          />
          <Input name="cpf" icon={FiCreditCard} type="text" placeholder="CPF" />
          <Input
            name="address"
            icon={FiHome}
            type="text"
            placeholder="Endereço completo"
          />

          <ActionButton>
            <button
              type="button"
              onClick={() => closeModal(false)}
              className="button cancel"
            >
              Cancelar
            </button>
            <button type="submit" className="button save">
              Salvar
            </button>
          </ActionButton>
        </Form>
      </Container>
    </Modal>
  );
};

export default ModalAddCustomer;
