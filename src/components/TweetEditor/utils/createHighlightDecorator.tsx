import styled from "styled-components";

const EditorHighlight = styled.span`
    background-color: #fd9bb0;
`;

function HashTag({ children }: any) {
  return <EditorHighlight>{children}</EditorHighlight>;
}

export const createHighlightDecorator = (regex: any) => {
  function hashTagStrategy(contentBlock: any, callback: any) {
    const text = contentBlock.getText();
    let matchArr, start;
    while ((matchArr = regex.exec(text)) !== null) {
      start = matchArr.index;
      callback(start, start + matchArr[0].length);
    }
  }

  return {
    strategy: hashTagStrategy,
    component: HashTag
  };
};