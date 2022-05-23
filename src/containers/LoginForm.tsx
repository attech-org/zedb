import { useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";

const Button = styled.button`
  margin-top: 10px;
  margin-bottom: 20px;
  width: 80%;
  height: 2em;
  color: white;
  border-radius: 4px;
  font-size: 15px;
  font-weight: bold;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.7em;
  padding-top: 0.7em;
  cursor: pointer;
  background-color: #00b3ff;
  border: 1px solid transparent;
`;

const LoginPageInputField = (props: any) => {
  const [loginInput, setLoginInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const onLoginInputChange = (e: any) => {
    setLoginInput(e.target.value);
  };

  const onPasswordInputChange = (e: any) => {
    setPasswordInput(e.target.value);
  };

  const onButtonClick = () => {
    if (loginInput !== "" && passwordInput !== "")
      props.onButtonClick(loginInput, passwordInput);
  };

  return (
    <>
      <Input
        onChange={onLoginInputChange}
        value={loginInput}
        placeholder="Phone number, username, or email"
      ></Input>
      <Input
        onChange={onPasswordInputChange}
        value={passwordInput}
        type="password"
        placeholder="Password"
      ></Input>
      <Button onClick={onButtonClick}>Log In</Button>
    </>
  );
};

export default LoginPageInputField;
