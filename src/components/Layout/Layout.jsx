import styled from "styled-components";
import { LeftPanel } from "../LeftPanel";
import { RightPanel } from "../RightPanel";

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;

  display: grid;
  grid-template-columns: 0.7fr 1.2fr 1fr;
  grid-template-rows: 100vh;
  @media (max-width: 1280px) {
    grid-template-columns: 0.4fr 1.2fr 1fr;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 0.3fr 1.3fr;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: calc(100vh - 50px) 50px;
  }
`;

const Main = styled.main`
  border: 1px solid #eeeeee;
  padding: 20px;
  text-align: center;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <LeftPanel />
        <Main>{children}</Main>
        <RightPanel />
      </Wrapper>
    </>
  );
};

export default Layout;
