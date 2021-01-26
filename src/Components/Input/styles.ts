import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 16px;
  width: 90%;
  background: white;
  border-radius: 10px;

  svg {
    margin: 0 8px;
  }

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
  }
`;
