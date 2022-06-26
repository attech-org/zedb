import { useForm } from "usetheform";
import { UploadImgVideo } from "./components/UploadImgVideo";
import { UploadGif } from "./components/UploadGif";
import { EmojiPicker } from "./components/EmojiPicker";
import styled from "styled-components";

const UploadMediaBar = styled.div`
  display: flex;
`;

export const TweetFormUploadMediaBar = () => {
  const { state } = useForm();
  // const disableUploadGif = state.media !== undefined;
  const disableUploadImgVideo = state.gif !== undefined;
  return (
    <UploadMediaBar>
      <UploadImgVideo disabled={disableUploadImgVideo} />
      {/* <UploadGif disabled={disableUploadGif} /> */}
      <EmojiPicker />
    </UploadMediaBar>
  );
};
