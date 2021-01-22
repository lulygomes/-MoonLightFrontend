/* eslint-disable react/prop-types */
import React from 'react';

import { Modal, Container, ActionButton } from './styles';

const ModalAddCustomer: React.FC = () => {
  return (
    <Modal>
      <Container>
        <h2>Cadastrar de cliente</h2>
        <form action="">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Telefone com DDD" />
          <input type="text" placeholder="CPF" />
          <input type="text" placeholder="Endereço completo" />

          <ActionButton>
            <button type="button" className="button cancel">
              Cancelar
            </button>
            <button type="submit" className="button save">
              Salvar
            </button>
          </ActionButton>
        </form>
      </Container>
    </Modal>
  );
};

export default ModalAddCustomer;
