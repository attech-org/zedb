import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import LoginPageInputField from "../containers/LoginForm";
import SignUpPage from "./SignUpPage";

const Layout = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const MainSection = styled.div`
  max-width: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid #dbdbdb;
  background-color: #ffffff;
  margin: 0 0 10px;
`;

const LogoHeader = styled.h1`
  margin-top: 30px;
  margin-bottom: 30px;
  letter-spacing: 5px;
  padding: 0 50px 0;
`;

const OrHeader = styled.h3`
  width: 80%;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 10px 0 30px;
`;

const OrSpan = styled.span`
  background: #fff;
  padding: 0 10px;
`;

const LoginWithFacebookLink = styled.p`
  color: #3253b0;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 0 30px 0;
`;

const FacebookIcon = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  top: 5px;
  margin-right: 3px;
`;

const ForgotPasswordLink = styled.p`
  color: #3253b0;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const NoAccountSection = styled.div`
  max-width: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid #dbdbdb;
  background-color: #ffffff;
  padding: 7px 0;
`;

const NoAccountParagraph = styled.p`
  font-size: 14px;
`;
const LinkToRegisterPage = styled(Link)`
  color: #00b3ff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 90%;
`;

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

/* <Link to="/sign-up">Sign Up</Link>; */

const LoginPage = () => {
  return (
    <>
      <Layout>
        <MainSection>
          <LogoHeader>ZEDB</LogoHeader>
          <LoginPageInputField />
          <OrHeader>
            <OrSpan>OR</OrSpan>
          </OrHeader>
          <LoginWithFacebookLink>
            <FacebookIcon src={require('../assets/images/facebook-icon.png')} alt="Facebook Icon" />
            Log in with Facebook
            </LoginWithFacebookLink>
          <ForgotPasswordLink>Forgot password?</ForgotPasswordLink>
        </MainSection>

        <NoAccountSection>
          <NoAccountParagraph>
            Don't have an account?{" "}
              <LinkToRegisterPage to="/register">Sign Up</LinkToRegisterPage>
          </NoAccountParagraph>
        </NoAccountSection>

        <Footer></Footer>
      </Layout>

      <Routes>
        <Route path="/register" element={<SignUpPage />} />
      </Routes>
    </>
  );
};

export default LoginPage;
