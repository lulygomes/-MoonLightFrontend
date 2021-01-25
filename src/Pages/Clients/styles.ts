import styled from 'styled-components';

export const Container = styled.main`
  margin: 2rem 4rem 1rem;
  padding: 18px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);

  @media (max-width: 800px) {
    margin: 0.2rem 0.4rem 1rem;
    padding: 8px;
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

export const MainHeader = styled.header`
  background: tomato;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    padding: 1rem 0 3rem;
    letter-spacing: 2px;
    font-size: 3rem;
  }
`;

export const List = styled.div`
  margin: 2rem 0;
  align-self: center;

  h2 {
    margin-left: 10px;
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 1.5px;
  }

  table {
    margin: 15px auto;
    width: 90%;
    border-spacing: 0 1rem;

    thead {
      padding: 10px;
      background: rgba(0, 0, 0, 0.1);

      tr {
      }

      th {
        padding: 10px;
      }
    }

    tbody {
      tr {
        transition: all 0.5s ease 0.01s;

        &:hover {
          background: #f4f4f4;
          color: #222;
        }
      }
      td {
        text-align: center;
        padding: 8px;
        margin: 8px auto;
      }
    }
  }
`;
