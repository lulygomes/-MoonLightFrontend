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
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    padding: 1rem 0 3rem;
    letter-spacing: 2px;
    font-size: 3rem;
  }

  button.addCustomer {
    margin-right: 18px;
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50px;
    background: rgba(50, 255, 50, 0.8);
    transition: all 0.2s;

    &:hover {
      background: rgba(50, 255, 50, 1);
    }
  }
`;

export const List = styled.div`
  margin: 2rem 0;
  align-self: center;
  overflow-x: auto;

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
        padding: 8px;
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
        padding: 4px;
        margin: 4px auto;
      }
    }

    .tdOptions {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #editCustomer {
      background: rgb(255, 165, 0, 0.8);
      padding: 5px;
      width: 35px;
      height: 35px;
      margin-right: 8px;

      border-radius: 10px;

      transition: all 0.2s;

      &:hover {
        cursor: pointer;
        background: rgb(255, 165, 0, 1);
        width: 40px;
        height: 40px;
      }
    }

    #deleteCustomer {
      background: rgb(255, 0, 0, 0.8);
      padding: 5px;
      width: 35px;
      height: 35px;

      border-radius: 10px;

      transition: all 0.2s;

      &:hover {
        cursor: pointer;
        background: rgb(255, 0, 0, 1);
        width: 40px;
        height: 40px;
      }
    }
  }
`;
