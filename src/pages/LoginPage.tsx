import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LoginPageInputField from "../components/LoginPageInputField";

const Layout = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainSection = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid gray;
  background-color: #ffffff;
  margin: 0 0 50px;
`;

const LogoHeader = styled.h1`
  margin-top: 30px;
  margin-bottom: 30px; 
  letter-spacing: 5px;
`;

const OrHeader = styled.h3`
  width: 80%; 
  text-align: center; 
  border-bottom: 1px solid #000; 
  line-height: 0.1em;
  margin: 10px 0 30px; 
`;

const OrSpan = styled.span`
   background:#fff; 
   padding:0 10px; 
`;

const ForgotPasswordLink = styled.a`
  color: #3253b0;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const NoAccountSection = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid gray;
  background-color: #ffffff;
  padding: 7px 0;
`;

const NoAccountParagraph = styled.p`
  font-size: 18px;
`;
const NoAccountLink = styled.a`
  color: #00b3ff;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 90%;
`;

// <Link to="/sign-up">Sign Up</Link>

// const Button = styled.button`
//   display: inline-block;
//   border-radius: 3px;
//   padding: 0.5rem 0;
//   margin: 0.5rem 1rem;
//   width: 11rem;
//   background: transparent;
//   color: black;
//   border: 2px solid black;
// `;

const LoginPage = () => {
  return (
    <>
      <Layout>

        <MainSection>
          <LogoHeader>ZEDB</LogoHeader>
          <LoginPageInputField />
          <OrHeader><OrSpan>OR</OrSpan></OrHeader>
          <ForgotPasswordLink>Forgot password?</ForgotPasswordLink>
        </MainSection>

        <NoAccountSection>
          <NoAccountParagraph>Don't have an account? <NoAccountLink>Sign Up</NoAccountLink></NoAccountParagraph>
        </NoAccountSection>

        <Footer></Footer>
      </Layout>
    </>
  );
};

export default LoginPage;
