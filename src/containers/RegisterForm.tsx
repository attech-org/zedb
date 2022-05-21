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
  background-color: #0095f6;
  border: 1px solid transparent;
`;

const SignUpPageInputField = (props: any) => {
  const [signUpInput, setsignUpInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [fullNameInput, setFullNameInput] = useState("");
  const [UserNameInput, setUserNameInput] = useState("");

  const onLoginInputChange = (e: any) => {
    setsignUpInput(e.target.value);
  };

  const onFullNameInputChange = (e: any) => {
    setFullNameInput(e.target.value);
  };
  const onUserNameInputChange = (e: any) => {
    setUserNameInput(e.target.value);
  };

  const onPasswordInputChange = (e: any) => {
    setPasswordInput(e.target.value);
  };

  const onButtonClick = () => {
    if (signUpInput !== "" && passwordInput !== "")
      props.onButtonClick(signUpInput, passwordInput);
  };

  return (
    <>
      <Input
        onChange={onLoginInputChange}
        value={signUpInput}
        placeholder="Mobile number or email address"
      ></Input>
      <Input
        onChange={onFullNameInputChange}
        value={fullNameInput}
        placeholder="Full Name"
      />
      <Input
        onChange={onUserNameInputChange}
        value={UserNameInput}
        placeholder="Username"
      />
      <Input
        onChange={onPasswordInputChange}
        value={passwordInput}
        type="password"
        placeholder="Password"
      ></Input>
      <Button onClick={onButtonClick}>Sign Up</Button>
    </>
  );
};

export default SignUpPageInputField;
