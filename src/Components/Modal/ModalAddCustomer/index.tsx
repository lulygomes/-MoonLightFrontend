/* eslint-disable react/prop-types */
import React, { Dispatch, SetStateAction } from 'react';

import { Modal, Container, ActionButton } from './styles';

interface ModalData {
  closeModal: Dispatch<SetStateAction<boolean>>;
}

const ModalAddCustomer: React.FC<ModalData> = ({ closeModal }) => {
  return (
    <Modal>
      <Container>
        <h2>Cadastro de cliente</h2>
        <form action="">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Telefone com DDD" />
          <input type="text" placeholder="CPF" />
          <input type="text" placeholder="Endereço completo" />

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
        </form>
      </Container>
    </Modal>
  );
};

export default ModalAddCustomer;
