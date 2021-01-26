import styled, { keyframes } from 'styled-components';

const appearFromRight = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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

  animation: ${appearFromRight} 1s;
`;

export const Container = styled.div`
  transition: all 1s;
  background-color: #ddd;
  color: #333;
  width: 70%;
  text-align: center;

  border-radius: 8px;

  @media (max-width: 800px) {
    width: 350px;
  }

  h2 {
    margin: 20px 0;
    padding: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    & div:last-child {
      margin: 20px;
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
