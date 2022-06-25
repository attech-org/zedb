import styled from "styled-components";
import { Homefeed } from "../containers/Homefeed";
import { PostHeader } from "../components/PostHeader";
import { FeedPost } from "../components/FeedPost";
import { ProfileForm } from "../components/ProfileForm";

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
  commentsQuantity?: string;
  retweetQuantity?: string;
  likeQuantity?: string;
};
export const Home = () => {
  let userInfo: Array<userTypeObject> = [
    {
      url: "https://bipbap.ru/wp-content/uploads/2017/12/0f92147ad2284aae418b40faf24dc68902960019_hq-640x456.jpg",
      nickname: "Elon Musk",
      isVerified: true,
      userId: "@elonmusk",
      postingTime: "3h",
      commentsQuantity: "0",
      retweetQuantity: "0",
      likeQuantity: "0",
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

      commentsQuantity: "6,767",
      retweetQuantity: "15.6K",
      likeQuantity: "191.2K",
    },
    {
      url: "https://pbs.twimg.com/profile_images/1529956155937759233/Nyn1HZWF_400x400.jpg",
      nickname: "John Doe",
      isVerified: false,
      userId: "@john_doe",
      postingTime: "10h",
      text: `I'm superman`,
      pictures: {
        url: [
          "https://static.remove.bg/remove-bg-web/913b22608288cd03cc357799d0d4594e2d1c6b41/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
        ],
      },

      commentsQuantity: "6,767",
      retweetQuantity: "15.6K",
      likeQuantity: "191.2K",
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
