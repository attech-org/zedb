import styled from "styled-components";
import { Form } from "usetheform";
import { TweetEditor } from "../components/TweetEditor/TweetEditor";
import { TweetEditorPreview } from "../components/TweetEditorPreview/TweetEditorPreview";
import { TweetFormUploadMediaBar } from "../components/TweetFormUploadMediaBar/TweetFormUploadMediaBar";
import { TweetFormPrivacyPicker } from "../components/TweetFormPrivacyPicker";
import { TweetFormSubmit } from "../components/TweetFormSubmit";
import { TweetFormCharacterCounter } from "../components/TweetFormCharacterCounter/TweetFormCharacterCounter";

const MAX_CHARS_ALLOWED = 280;

async function onSubmit(state: any) {
  // make an API call
  // await submitForm(state)
  const {
    editor: { plainText },
    ...resState
  } = state;
  console.log("onSubmit  => ", { ...resState, plainText });
  return true;
}

const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  max-width: 500px;
  margin: auto;
`;

const ThematicBreak = styled.span`
  display: block;
  padding: 8px 5px;
  &::after {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    background-color: rgb(235, 238, 240);
  }
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionBarSubmit = styled.div`
  display: flex;
`;

const ThematicBreakVertical = styled.span`
  display: block;
  padding: 5px 8px;

  &::after {
    content: "";
    display: block;
    height: 100%;
    width: 1px;
    background-color: rgb(235, 238, 240);
  }
`;

const TweetForm = () => {
  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <TweetEditor maxChars={MAX_CHARS_ALLOWED} />
        <TweetEditorPreview />
        <TweetFormPrivacyPicker />
        <ThematicBreak />
        <ActionBar>
          <TweetFormUploadMediaBar />
          <ActionBarSubmit>
            <TweetFormCharacterCounter maxChars={MAX_CHARS_ALLOWED} />
            <ThematicBreakVertical />
            <TweetFormSubmit />
          </ActionBarSubmit>
        </ActionBar>
      </Form>
    </Wrapper>
  );
};

export default TweetForm;
