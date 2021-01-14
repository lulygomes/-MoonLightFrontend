import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5% 0;
  transition: all 0.3s ease 0s;

  ul,
  li {
    display: inline-block;
    margin: 0 10px;
    padding: 20px;
    border-radius: 50px;

    a {
      color: #f0f0f0;
      text-decoration: none;
      letter-spacing: 1px;
      font-size: 20px;
    }

    li:hover {
      background-color: ${shade(0.2, '#312e38')};
    }
  }
`;
