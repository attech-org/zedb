import styled from "styled-components";

const Div = styled.div`
  background: #cecaca;
  @media (max-width: 1000px) {
    display: none;
  }
`;
export const RightPanel = () => {
  return <Div>RightPanel</Div>;
};
