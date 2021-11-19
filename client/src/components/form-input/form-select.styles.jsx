import styled from 'styled-components';

const subColor = 'black';


export const GroupContainer = styled.div`
  position: relative;
  margin: 10px 0;
`;


export const FormSelectContainer = styled.select`
  background: none;
  background-color: white;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border-radius: 0;
  border: 1px solid ${subColor};
  
  &:focus {
    outline: none;
  }
`;
