import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5% 0;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    padding: 8px 0.5rem 0;
  }
`;

export const Nav = styled.nav`
  ul,
  li {
    display: inline-block;
    margin: 0 10px;
    padding: 20px;
    border-radius: 50px;
    transition: all 0.4s ease 0s;

    a {
      color: #f0f0f0;
      text-decoration: none;
      letter-spacing: 1px;
      font-size: 20px;
    }
  }

  li:hover {
    background-color: ${shade(0.2, '#312e38')};
  }

  @media (max-width: 800px) {
    ul,
    li {
      margin: 0 5px;
      padding: 10px;
    }
  }
`;
