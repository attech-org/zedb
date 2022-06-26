import { useEffect, useRef, useState } from "react";
import { useSelector } from "usetheform";
import { EditorState, Modifier } from "draft-js";
import EmojiSVG from "../../../assets/images/emojipicker.svg";
import Picker from "emoji-picker-react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const EmojiPickerDiv = styled.div`
  position: relative;
`;

const EmojiPickerWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0%;
  z-index: 2;
  animation: ${fadeIn} 0.15s ease-in forwards;
`;

const EmojiPickerBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background: none;
  outline: none;
  border: 0;

  &:hover {
    background-color: rgba(27, 149, 224, 0.1);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const EmojiPicker = ({ disabled }: any) => {
  const [showEmojiPicker, togglePicker] = useState(() => false);
  const [editor, setEditor] = useSelector((state: any) => state.editor);

  const toggleEmojiPicker = () => togglePicker((prev) => !prev);
  const onEmojiClick = (e: any, emojiObject: any) => {
    e.preventDefault();
    const { editorState, refEditor } = editor;
    const contentState = editorState?.getCurrentContent();
    const targetRange = editorState?.getSelection();
    const modifierAPI = targetRange.isCollapsed()
      ? Modifier.insertText
      : Modifier.replaceText;
    const newContentState = modifierAPI(
      contentState,
      targetRange,
      emojiObject.emoji
    );
    const newEditorState = EditorState.push(
      editorState,
      newContentState,
      "apply-entity"
    );
    setEditor((prev: any) => ({ ...prev, editorState: newEditorState }));
    toggleEmojiPicker();
    setTimeout(() => refEditor.current.focus(), 100);
  };

  const refPicker = useClickOutPicker(() => {
    showEmojiPicker && togglePicker(false);
  });

  return (
    <EmojiPickerDiv ref={refPicker}>
      <EmojiPickerBtn
        disabled={disabled}
        type="button"
        onClick={toggleEmojiPicker}
      >
        <img alt="Add Emoji" src={EmojiSVG} />
      </EmojiPickerBtn>
      {showEmojiPicker && (
        <EmojiPickerWrapper>
          <Picker onEmojiClick={onEmojiClick} />
        </EmojiPickerWrapper>
      )}
    </EmojiPickerDiv>
  );
};

const useClickOutPicker = (cb: any) => {
  const ref: any = useRef(null);
  useEffect(() => {
    const clickOut = (e: any) => {
      if (!ref.current.contains(e.target)) {
        cb(e);
      }
    };
    window.addEventListener("click", clickOut);
    return () => {
      window.removeEventListener("click", clickOut);
    };
  }, [cb]);
  return ref;
};
