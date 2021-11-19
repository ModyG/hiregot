import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  background: linear-gradient(90deg,rgb(18,47,34) 0%,rgb(25,27,32) 100%);
  height: 90px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;

  @media screen and (max-width: 960px) {
    position: relative;
  }
`;

export const OptionsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  margin-right: 2rem;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
  
  &.LinkActive {
    background: linear-gradient(90deg,rgb(18,47,34) 0%,rgb(25,27,32) 100%);
    left: 0;
    opacity: 1;
    top: 70px;
    transition: all 0.5s ease;
    z-index: 1;
    height: auto;
  }
}
`;

export const OptionLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 32px 10px;

    & svg {
      font-size: 30px;
    }

    & :hover {
      background-color: #1888ff;
      border-radius: 4px;
      transition: all 0.2s ease-out;
    }
  
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: grid;
    grid-gap: 17px;

    & :hover {
      background-color: #1888ff;
      border-radius: 0;
    }
  }
  
`;



export const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 80px;
`;

export const OptionLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;

  & svg {
    margin-left: 0.5rem;
    font-size: 1.6rem;
  }

  @media screen and (max-width: 960px) {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(25%, 50%);
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;

    & svg {
      color: #fff;
      font-size: 2rem;
    }
  }
`;
