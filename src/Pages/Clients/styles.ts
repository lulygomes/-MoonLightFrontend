import styled from 'styled-components';

export const Container = styled.main`
  margin: 0 4rem;

  h1 {
    padding: 3rem 0;
    letter-spacing: 2px;
  }

  h2 {
    margin-bottom: 2rem;
  }

  form {
    input {
      margin: 10px;
      padding: 5px;
    }
  }

  button#submit {
    border: none;
    border-radius: 5px;
    padding: 8px;

    margin-left: 8px;

    background: #21ff21;
    font-size: 18px;
    font-weight: 500;
  }

  button#reset {
    border: none;
    border-radius: 5px;
    padding: 8px;

    margin-left: 14px;

    background: #f52121;
    font-size: 18px;
    font-weight: 500;
  }
`;
