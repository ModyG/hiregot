import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #EEE;
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: inline-grid;
  justify-content: space-between;
  margin-bottom: 10px;

  & svg {
    margin-top: 15px;
    font-size: 25px;
  }
`;
