import styled from "styled-components";
import { InputField } from "../containers/InputField";
import { Banner } from "./Banner";
import { FormHeader } from "./FormHeader";

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`;

const Form = styled.div`
  font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif;
  border-radius: 16px;
  overflow: auto;
  width: 600px;
  height: 650px;
  background: #ffffff;
  :-webkit-scrollbar {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  @media (max-width: 700px) {
    border-radius: 0px;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
  text-align: start;
`;
// BIRTHDAYDIV
const BirthDate = styled.div`
  font-family: inherit;
  font-size: 15px;

  padding-left: 16px;
  padding-right: 16px;
`;
const BirthDateWrapper = styled.div`
  display: flex;
`;
const Date = styled.span`
  font-size: 20px;
  line-height: 24px;
  color: #0f1419;
`;
const Point = styled.span`
  margin: -3px 4px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const EditSpan = styled.span`
  color: rgb(29, 155, 240);
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
const BirthDateSpan = styled.span`
  color: rgb(83, 100, 113);
  font-weight: 400;
`;
// BIRTHDAYDIV

const SwitchToProfessionalLink = styled.div`
  margin-top: 30px;
  margin-bottom: 70px;
  padding: 0px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: calc(48px);
  cursor: pointer;
  :hover {
    background-color: #f7f9f9;
    transition-duration: 0.2s;
  }
`;
const SwitchToProfessionalSpan = styled.span`
  font-family: inherit;
  color: #0f1419;
  font-size: 20px;
`;

export const ProfileForm = () => {
  return (
    <Background>
      <Form>
        <FormHeader />
        <Banner />
        <InputField />

        <BirthDate>
          <BirthDateWrapper>
            <BirthDateSpan>Birth date</BirthDateSpan> <Point> . </Point>
            <EditSpan>Edit</EditSpan>
          </BirthDateWrapper>
          <Date>May 1, 2022</Date>
        </BirthDate>

        <SwitchToProfessionalLink>
          <SwitchToProfessionalSpan>
            Switch to professional
          </SwitchToProfessionalSpan>
          <svg
            height="18.75px"
            width="18.75px"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g>
              <path d="M17.207 11.293l-7.5-7.5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L15.086 12l-6.793 6.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.023 0-1.414z"></path>
            </g>
          </svg>
        </SwitchToProfessionalLink>
      </Form>
    </Background>
  );
};
