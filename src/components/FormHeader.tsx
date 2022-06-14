import styled from "styled-components";

const HeaderWrapperText = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonHeader = styled.button`
  font-weight: 600;
  user-select: none;
  background-color: rgb(15, 20, 25);
  min-height: 32px;
  min-width: 32px;
  outline-style: none;
  color: white;
  padding-left: 16px;
  padding-right: 16px;
  cursor: pointer;
  border-radius: 9999px;
`;

const Layout = styled.div`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 53px;

  border-top-left-radius: 16px;

  padding-left: 8px;
  padding-right: 16px;

  max-width: calc(600px - 16px - 24px);
  width: 100%;

  position: fixed;
  background: #ffffff;
  opacity: 0.9;

  @media (max-width: 700px) {
    border-radius: 0px;
    max-width: calc(100vw - 24px);
  }
`;

const H3 = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif;
  margin-left: 30px;
`;

const SvgX = styled.svg`
  @media (max-width: 700px) {
    display: none;
  }
  height: 20px;
  width: 20px;
`;
const SvgBack = styled.svg`
  @media (min-width: 700px) {
    display: none;
  }
  height: 20px;
  width: 20px;
`;

const HoverDiv = styled.div`
  border-radius: 50%;
  min-width: 36px;
  min-height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background: #e0dfdf;
    transition-duration: 0.2s;
  }
`;

export const FormHeader = () => (
  <>
    <Layout>
      <HeaderWrapperText>
        <HoverDiv>
          <SvgX viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path>
            </g>
          </SvgX>

          <SvgBack viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
            </g>
          </SvgBack>
        </HoverDiv>
        <H3>Edit Profile</H3>
      </HeaderWrapperText>

      <ButtonHeader>Save</ButtonHeader>
    </Layout>
  </>
);
