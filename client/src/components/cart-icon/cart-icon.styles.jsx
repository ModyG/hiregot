import styled from 'styled-components';

export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 40px 10px;

  @media screen and (max-width: 960px) {
    width: auto;
  }
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 15px;
  bottom: 45px;
`;
