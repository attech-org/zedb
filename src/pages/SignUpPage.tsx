import { Link } from "react-router-dom";
import styled from "styled-components";
import { GetTheApp } from "../components/GetTheApp";
import SignUpPageInputField from "../containers/RegisterForm";

const Layout = styled.main`
  width: 100vw;
  height: 100vh;
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid #dbdbdb;
  background-color: #ffffff;
  margin: 0 0 10px;
`;

const HaveAnAccountSection = styled.div`
  width: 350px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid #dbdbdb;
  background-color: #ffffff;
  padding: 30px 0;
`;

const LogoInstagram = styled.img`
  margin-top: 36px;
  margin-bottom: 12px;
`;

const OrHeader = styled.h3`
  width: 80%;
  text-align: center;
  border-bottom: 1px solid #dbdbdb;
  line-height: 0.1em;
  margin: 10px 0 30px;
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

const HaveAnAccountParagraph = styled.p`
  font-size: 14px;
`;
const StyledLink = styled(Link)`
  color: #0095f6;
  font-size: 14px;
  text-decoration: none;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 90%;
`;

const H2 = styled.footer`
  color: #8e8e8e;
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  margin: 0 40px 10px;
  text-align: center;
`;

const TernsOfUseP = styled.p`
  color: #8e8e8e;
  font-size: 12px;
  line-height: 16px;
  margin: 10px 40px;
  text-align: center;
  margin-bottom: 50px;
`;

const TernsOfUseA = styled.a`
  color: #8e8e8e;
  font-weight: 600;
  text-decoration: none;
`;

const LogInWithFacebookButton = styled.button`
  width: 80%;
  background-color: #0095f6;
  border: 1px solid transparent;
  border-radius: 4px;
  position: relative;
  font-size: 14px;
  font-weight: 600;
  padding: 6px 9px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  line-height: 18px;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const SignUpPage = () => {
  return (
    <>
      <Layout>
        <MainSection>
          <LogoInstagram
            alt="Instagram"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          ></LogoInstagram>
          <H2>Sign up to see photos and videos from your friends.</H2>
          <LogInWithFacebookButton>
            Log in with Facebook
          </LogInWithFacebookButton>
          <OrHeader>
            <OrSpan>OR</OrSpan>
          </OrHeader>
          <SignUpPageInputField />
          <TernsOfUseP>
            By signing up, you agree to our{" "}
            <TernsOfUseA
              href="https://help.instagram.com/581066165581870"
              target="blank"
            >
              Terms
            </TernsOfUseA>
            ,{" "}
            <TernsOfUseA
              href="https://help.instagram.com/519522125107875"
              target="blank"
            >
              Data Policy
            </TernsOfUseA>{" "}
            and{" "}
            <TernsOfUseA
              href="https://help.instagram.com/1896641480634370?ref=ig"
              target="blank"
            >
              Cookie Policy
            </TernsOfUseA>
            .
          </TernsOfUseP>{" "}
        </MainSection>

        <HaveAnAccountSection>
          <HaveAnAccountParagraph>
            Have an account? <StyledLink to="/login">Log in</StyledLink>
          </HaveAnAccountParagraph>
        </HaveAnAccountSection>

        <GetTheApp />

        <Footer></Footer>
      </Layout>
    </>
  );
};

export default SignUpPage;
