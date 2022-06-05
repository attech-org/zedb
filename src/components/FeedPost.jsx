import styled from "styled-components";
import { Homefeed } from "../containers/Homefeed";
import { PostHeader } from "./PostHeader";

const Div = styled.div`
  @media (max-width: 1000px) {
    width: 81%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const FeedPost = () => {
  return (
    <Div>
      <PostHeader />
      <Homefeed />

      {/* <FeedPost></FeedPost> */}
    </Div>
  );
};
