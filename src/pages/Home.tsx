import styled from "styled-components";
import { Homefeed } from "../containers/Homefeed";
import { PostHeader } from "../components/PostHeader";
import { FeedPost } from "../components/FeedPost";

const Div = styled.div`
  @media (max-width: 1000px) {
    width: 81%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export type userTypeObject = {
  url?: string;
  nickname?: string;
  isVerified?: boolean;
  userId?: string;
  postingTime?: string;
  text?: string;
  pictures?:
    | {
        url: string[];
      }
    | undefined;
};
export const Home = () => {
  let userInfo: Array<userTypeObject> = [
    {
      url: "https://bipbap.ru/wp-content/uploads/2017/12/0f92147ad2284aae418b40faf24dc68902960019_hq-640x456.jpg",
    },
  ];

  const usersPosts: Array<userTypeObject> = [
    {
      url: "https://pbs.twimg.com/profile_images/1529956155937759233/Nyn1HZWF_400x400.jpg",
      nickname: "Elon Musk",
      isVerified: true,
      userId: "@elonmusk",
      postingTime: "3h",
      text: `If chess was released as a video game`,
      pictures: {
        url: [
          "https://pbs.twimg.com/media/FUiCU3CX0AAw1BX?format=jpg&name=medium",
        ],
      },
    },
  ];
  return (
    <Div>
      <PostHeader />
      <Homefeed userInfo={userInfo} />

      <FeedPost usersPosts={usersPosts}></FeedPost>
    </Div>
  );
};
