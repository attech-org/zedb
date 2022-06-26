import { useForm } from "usetheform";
import { PreviewUrl } from "./components/PreviewUrl";
import { PreviewMedia } from "./components/PreviewMedia";
import { PreviewGif } from "./components/PreviewGif";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 5px;
`;

export const TweetEditorPreview = () => {
  const { state } = useForm();
  const hidePreviewURL = state?.media !== undefined || state?.gif !== undefined;
  return (
    <Wrapper>
      {!hidePreviewURL && <PreviewUrl />}
      <PreviewMedia />
      <PreviewGif />
    </Wrapper>
  );
};
