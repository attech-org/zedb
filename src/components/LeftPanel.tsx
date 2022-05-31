import styled from "styled-components";

const Div = styled.div`
  background: #cecaca;
  @media (max-width: 500px) {
    order: 1;
  }
`;
export const LeftPanel = () => {
  return (
    <>
      <Div>LeftPanel</Div>
    </>
  );
};
