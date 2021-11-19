import styled from "styled-components";

export const FormContainer = styled.div`
  width: auto;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 20px;
  border: 1px solid #EEE;
`;
export const FancyTitle = styled.div`
    
    & h3 {
    position: relative;
    display: inline-block;
    background-color: #FFFFFF;
    font-size: 35px;
    color: #444;
    font-weight: 600;
    line-height: 1.5;
    margin: 10px 0 0 10px;
    }

    & svg {
      font-size: 25px;
    }
`;