/* eslint-disable react/prop-types */
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Form } from '@unform/web';
import { FiCreditCard, FiHome, FiPhone, FiUser } from 'react-icons/fi';
import api from '../../../services/api';

import Input from '../../Input';

import { Modal, Container, ActionButton } from './styles';

interface ModalData {
  closeModal: Dispatch<SetStateAction<boolean>>;
  customerId: string;
}

interface CustomerData {
  id: string;
  name: string;
  cpf: string;
  phone: string;
  address: string;
}

const ModalAddCustomer: React.FC<ModalData> = ({ closeModal, customerId }) => {
  const [customer, setCustomer] = useState<CustomerData>({} as CustomerData);
  useEffect(() => {
    api
      .get(`customers/${customerId}`)
      .then(response => {
        setCustomer(response.data);
      })
      .catch(err => console.log(err));
  }, [customerId]);

  const handleSubmit = useCallback(
    async data => {
      try {
        const { name, phone, cpf, address } = data;

        const formData = { id: customer.id, name, phone, cpf, address };

        await api.put('customers', formData);

        closeModal(false);
      } catch (err) {
        console.log(err);
      }
    },
    [closeModal, customer.id],
  );

  return (
    <Modal>
      <Container>
        <h2>Atualizar dados do cliente</h2>
        <Form initialData={customer} onSubmit={handleSubmit} action="">
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
