import styled from "styled-components";

const EditorOverLimit = styled.span`
    background-color: #fd9bb0;
`;

function OverLimit({ children }: any) {
  return <EditorOverLimit>{children}</EditorOverLimit>;
}

export const createOverLimitDecorator = (maxChars: any) => {
  function overLimitStrategy(contentBlock: any, callback: any) {
    const text = contentBlock.getText();
    const { length } = text;
    if (length >= maxChars) {
      callback(maxChars, length);
    }
  }

  return {
    strategy: overLimitStrategy,
    component: OverLimit,
  };
};
