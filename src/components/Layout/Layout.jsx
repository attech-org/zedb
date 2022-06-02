import styled from "styled-components";
import { LeftPanel } from "../LeftPanel";
import { RightPanel } from "../RightPanel";

const Wrapper = styled.div`
  height: 200vh;

  display: grid;
  grid-template-columns: 25% 42% 33%;
  grid-template-rows: 100vh;

  @media (max-width: 1280px) {
    grid-template-columns: 14% 48% 38%;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 19% 81%;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: calc(100vh - 50px) 50px;
  }
`;

const Main = styled.main`
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
