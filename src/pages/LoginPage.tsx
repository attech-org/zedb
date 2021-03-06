import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import LoginPageInputField from "../containers/LoginForm";
import SignUpPage from "./SignUpPage";
import { GetTheApp } from "../components/GetTheApp";

const Layout = styled.main`
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
`;

const MainSection = styled.div`
  max-width: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid #dbdbdb;
  background-color: #ffffff;
  margin: 40px 0 10px;
`;

const OrHeader = styled.h3`
  width: 80%;
  text-align: center;
  border-bottom: 1px solid #dbdbdb;
  line-height: 0.1em;
  margin: 0px 0 30px;
`;

const OrSpan = styled.span`
  font-size: 13px;
  font-weight: 600;
  margin: 0 18px;
  text-transform: uppercase;
  color: #8e8e8e;
  background: #fff;
  padding: 0 10px;
`;

const LoginWithFacebookLink = styled.p`
  color: #385185;
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
  color: #00376b;
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
  margin: 15px;
  text-align: center;
`;
const LinkToRegisterPage = styled(Link)`
  color: #00b3ff;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 90%;
`;

const LogoInstagram = styled.img`
  margin-top: 36px;
  margin-bottom: 30px;
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
          <LogoInstagram
            alt="Instagram"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          ></LogoInstagram>{" "}
          <LoginPageInputField />
          <OrHeader>
            <OrSpan>OR</OrSpan>
          </OrHeader>
          <LoginWithFacebookLink>
            <FacebookIcon
              src={require("../assets/images/facebook-icon.png")}
              alt="Facebook Icon"
            />
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

        <GetTheApp />

        <Footer></Footer>
      </Layout>

      <Routes>
        <Route path="/register" element={<SignUpPage />} />
      </Routes>
    </>
  );
};

export default LoginPage;
