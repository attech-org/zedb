import { Collection, Input } from "usetheform";
import { DraftEditor } from "./DraftEditor";
import { extractPlainText } from "./utils/extractPlainText";
import { limitTo } from "./utils/limitTo";

export const TweetEditor = ({ maxChars }: any) => {
  return (
      <div className="TextField">
        <Collection
          object
          name="editor"
          validators={[limitTo(maxChars)]}
          reducers={extractPlainText}
        >
          <DraftEditor name="editorState" maxChars={maxChars} />
          <Input type="hidden" name="plainText" />
        </Collection>
      </div>
  );
};
