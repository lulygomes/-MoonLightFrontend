/* eslint-disable react/prop-types */
import React, { Dispatch, SetStateAction } from 'react';
import { Form } from '@unform/web';
import { FiCreditCard, FiHome, FiPhone, FiUser } from 'react-icons/fi';

import Input from '../../Input';

import { Modal, Container, ActionButton } from './styles';

interface ModalData {
  closeModal: Dispatch<SetStateAction<boolean>>;
}

const ModalAddCustomer: React.FC<ModalData> = ({ closeModal }) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function handleSubmit(data: object): void {
    console.log(data);
  }
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
