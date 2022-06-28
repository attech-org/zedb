import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "../components/Input";

const Button = styled.button`
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
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
const LoginInput = styled(Input)`
  width: calc(100% - 20px);
`;

const Form = styled.form`
  width: 80%;
`;

interface InputField {
  userName: string;
  password: string;
}

const LoginPageInputField = () => {
  const { register, handleSubmit, reset } = useForm<InputField>();

  const onSubmit: SubmitHandler<InputField> = ({ userName, password }) => {
    // console.log({ userName, password });
    fetch("http://localhost:3001/users/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        password,
      }),
    });
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <LoginInput
        {...register("userName")}
        type="text"
        placeholder="Phone number, username, or email"
      />

      <LoginInput
        {...register("password", {
          minLength: 6,
        })}
        type="password"
        placeholder="Password"
      />

      <Button type="submit">Log In</Button>
    </Form>
  );
};

export default LoginPageInputField;
