import { useCallback, useMemo, useRef } from "react";
import { composeDecorators } from "./utils/composeDecorators";
import { useField } from "usetheform";
import { Editor, EditorState } from "draft-js";
import styled from "styled-components";
import "./public-DraftEditorPlaceholder-root.css"

const StyledEditor = styled.div`
  display: block;
  font-size: 17px;
  position: relative;
  width: 100%;
  max-width: 500px;
  overflow: hidden;
  min-height: 24px;
  text-align: left;
  padding: 10px 5px;
  box-sizing: border-box;
`;

export const DraftEditor = ({ maxChars, name = "editorState" }: any) => {
  const initialState = useMemo(
    () => EditorState.createEmpty(composeDecorators(maxChars)),
    [maxChars]
  );

  const { value, setValue } = useField({
    type: "custom",
    name,
    value: initialState,
  });

  const onInputChange = useCallback(
    (editorState: any) => setValue(editorState),
    [setValue]
  );

  /* 
     field used to hold the draft's ref 
     within the form state in order to be easly
     accessible from external form's fields (Input, Collection etc..) 
  */
  const refEditor = useRef(null);
  useField({
    type: "custom",
    name: "refEditor",
    value: refEditor,
  });

  return (
    <StyledEditor>
      <Editor
        ref={refEditor}
        editorState={value}
        onChange={onInputChange}
        placeholder="What’s happening?"
      />
    </StyledEditor>
  );
};
