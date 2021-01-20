import styled from 'styled-components';

export const Container = styled.main`
  margin: 2rem 4rem auto;
  padding: 18px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);

  h1 {
    padding: 1rem 0 3rem;
    letter-spacing: 2px;
    font-size: 3rem;
  }

  fieldset {
    padding: 5px;

    legend {
      font-size: 2rem;
      font-weight: 300;
      letter-spacing: 1.5px;
    }
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

export const List = styled.div`
  margin-top: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 1.5px;
  }
`;
