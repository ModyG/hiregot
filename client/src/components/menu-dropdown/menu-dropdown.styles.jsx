import styled from "styled-components";
import { Link } from 'react-router-dom';

export const OptionLink = styled(Link)`
  display: block;
  height: 100%;
  text-decoration: none;
  color: #fff;
  padding: 16px;
`;

export const DropdownMenu = styled.ul`
  background: linear-gradient(90deg,rgb(18,47,34) 0%,rgb(25,27,32) 100%);
  width: 200px;
  position: absolute;
  top: 90px;
  list-style: none;
  text-align: start;
  z-index: 999;
  & li {
    cursor: pointer;
  
    :hover {
        background: linear-gradient(90deg,rgb(38,47,34) 0%,rgb(25,27,35) 100%);
    }
  }
  
  & .clicked {
    display: none;
  }
`;