import styled from "styled-components";
import { Homefeed } from "../containers/Homefeed";
import { PostHeader } from "./PostHeader";

const Div = styled.div`
  @media (max-width: 1000px) {
    width: calc(81% - 22%);
  }
  @media (max-width: 500px) {
    width: calc(100%);
  }
`;

export const FeedPost = () => {
  return (
    <Div>
      <PostHeader />
      <Homefeed />
    </Div>
  );
};
