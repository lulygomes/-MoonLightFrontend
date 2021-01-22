import styled from 'styled-components';

export const Modal = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background-color: #f5f5f5;
  color: #333;
  width: 70%;
  height: 60%;
  text-align: center;

  border-radius: 8px;

  @media (max-width: 800px) {
    width: 350px;
    height: 400px;
  }

  h2 {
    padding: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    input {
      width: 90%;
      border: none;
      border-radius: 0.25rem;

      padding: 16px;
    }
  }
`;

export const ActionButton = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;

  width: 90%;

  .button.cancel {
    color: rgba(255, 50, 50, 0.8);
    border: 1px solid rgba(255, 50, 50, 0.8);
    border-radius: 0.25rem;

    padding: 1rem;
    background: transparent;
  }
  .button.cancel:hover {
    color: rgba(255, 50, 50, 1);
    border: 1px solid rgba(255, 50, 50, 1);
  }

  .button.save {
    color: #f5f5f5;
    border: 1px solid rgba(50, 255, 50, 0.8);
    border-radius: 0.25rem;

    padding: 1rem;
    width: 7rem;

    background: rgba(50, 255, 50, 0.8);
  }

  button.button.save:hover {
    background: rgba(50, 255, 50, 1);
    border: 1px solid rgba(50, 255, 50, 1);
  }
`;
