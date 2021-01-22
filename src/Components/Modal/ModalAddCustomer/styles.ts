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

  h2 {
    padding: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
      width: 80%;
    }
  }
`;

export const ActionButton = styled.div``;
