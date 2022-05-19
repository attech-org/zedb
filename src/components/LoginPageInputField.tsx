import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  margin-bottom: 20px;
  width: calc(80% - 20px);
  height: 2em;
  background-color: #f8f8f8;
  font-size: 15px;
  border: 1px solid #8e8e8e;
  border-radius: 4px;
  padding: 10px 10px;
`;

const Button = styled.button`
  margin-bottom: 20px;
  width: 80%;
  height: 1.5em;
  background-color: #00b3ff;
  color: white;
  border: 0 solid transparent;
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.5em;
  padding-top: 1.5em;
  cursor: pointer;
`;

const LoginPageInputField = (props: any) => {
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const onLoginInputChange = (e: any) => {
    setLoginInput(e.target.value);
  };

  const onPasswordInputChange = (e: any) => {
    setPasswordInput(e.target.value);
};

  const onButtonClick = () => {
    if(loginInput !== '' && passwordInput !== '')
        props.onButtonClick(loginInput, passwordInput);
  }

  return (
    <>
      <Input onChange={onLoginInputChange} value={loginInput} placeholder='Phone number, username, or email'></Input>
      <Input onChange={onPasswordInputChange} value={passwordInput} type="password" placeholder='Password'></Input>
      <Button onClick={onButtonClick}>Log In</Button>
    </>
  );
};

export default LoginPageInputField;