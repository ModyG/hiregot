import React, {useState} from 'react';
import * as FiIcons from 'react-icons/fi';
import classMames from 'classnames';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';


import { SignInAndSignUpContainer, LoginLink, Linker } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => {
  const [isActive, setIsActive] = useState(false);
  
  const handleOnClick = () => {
    setIsActive(!isActive);
  };

  return (
  <SignInAndSignUpContainer>
    {!isActive ? <SignIn /> : <SignUp />}
    <LoginLink 
      className={classMames('active',{'active':!isActive})}
      onClick={handleOnClick}>
      {isActive ? (
        <Linker><FiIcons.FiLogOut/>  Click her to LogIn</Linker>
      ) : (
        <Linker> <FiIcons.FiLogIn/>  Click her to register</Linker>
      )}
      </LoginLink>
  </SignInAndSignUpContainer>
)};

export default SignInAndSignUpPage;
