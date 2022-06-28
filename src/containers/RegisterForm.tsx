import { SubmitHandler, useForm } from "react-hook-form";
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

interface InputField {
  name: string;
  userName: string;
  email: string;
  password: string;
}

const SignUpPageInputField = () => {
  const { register, handleSubmit, reset } = useForm<InputField>();

  const onSubmit: SubmitHandler<InputField> = ({
    name,
    userName,
    email,
    password,
  }) => {
    // console.log({ name, userName, email, password });
    fetch("http://localhost:3001/users/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        userName,
        email,
        password,
      }),
    });
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("email")}
        type="email"
        placeholder="Mobile number or email address"
      ></Input>
      <Input {...register("name")} type="text" placeholder="Full Name" />
      <Input {...register("userName")} type="text" placeholder="Username" />
      <Input
        {...register("password", {
          minLength: 6,
        })}
        type="password"
        placeholder="Password"
      />
      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default SignUpPageInputField;
