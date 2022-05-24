import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import UserStats from "../components/UserStats";
import PostPreview from "../components/PostPreview";

const Layout = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden;
`;

const MainSection = styled.div`
  min-height: 600px;
  max-height: 600px;
  max-width: 350px;
  width: 100%;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  border-radius: 15px;
  overflow: auto;
`;

const UsernameSection = styled.div`
  width: 100%;
`;

const UsernameHeader = styled.h1`
  font-size: 18px;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  margin: 20px 0 10px 15px;
  letter-spacing: 1px;
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: rgba(168, 168, 168, 0.7);
`;

const InfoSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 12px 0 12px;
`;

const AvatarAndStatsSection = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
  /* padding: 10px 12px 0 12px; */
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 70px;
`;

const Avatar = styled.img`
  border-radius: 100%;
  width: 70px;
  height: 70px;
  margin-right: -35px;
  cursor: pointer;
`;

const AvatarPlusIcon = styled.img`
  border-radius: 100%;
  width: 18px;
  height: 18px;
  position: absolute;
  left: 50px;
  bottom: 5px;
  cursor: pointer;
`;

const AccountDescriptionSection = styled.div`
  width: 100%;
  margin-top: 10px;
  /* padding: 10px 12px 0 12px; */
`;

const AccountName = styled.p`
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.5px;
`;

const AccountBio = styled.p`
  font-size: 10px;
  margin-top: 2px;
  letter-spacing: 0.5px;
`;

const AccountLink = styled.a`
  text-decoration: none;
  color: #49d1ff;
  font-size: 11px;
  letter-spacing: 0.5px;

  :visited {
    color: #49d1ff;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
  width: 100%;
`;

const BigButton = styled(Link)`
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 6px 0;
  text-decoration: none;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 0.5px;
  width: 100%;
  text-align: center;
  margin-bottom: 5px;

  :visited {
    color: black;
  }
`;

const SmallButton = styled(Link)`
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 6px 0;
  text-decoration: none;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 0.5px;
  width: 31%;
  text-align: center;
  margin: 0 auto;

  :visited {
    color: black;
  }
`;

// For InstagramStories
// const Circle = styled.div`
//   border-radius: 100%;
//   outline: 1px solid black;
//   outline-offset: 15px;
//   width: 100px;
//   height: 100px;
//   background-image: url("https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
// `;

const PostsSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  row-gap: 5px;
  column-gap: 1%;
  margin-top: 10px;
  justify-content: space-between;
`;

const UserProfilePage = () => {
  return (
    <>
      <Layout>
        <MainSection>
          <UsernameSection>
            <UsernameHeader>username</UsernameHeader>
            <HorizontalLine></HorizontalLine>
          </UsernameSection>

          <InfoSection>
            <AvatarAndStatsSection>
              <AvatarWrapper>
                <Avatar src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Avatar>
                <AvatarPlusIcon
                  src={require("../assets/images/avatar-plus.png")}
                ></AvatarPlusIcon>
              </AvatarWrapper>
              <UserStats variableName="Posts" quantity="244"></UserStats>
              <UserStats variableName="Followers" quantity="4,453"></UserStats>
              <UserStats variableName="Following" quantity="806"></UserStats>
            </AvatarAndStatsSection>

            <AccountDescriptionSection>
              <AccountName>Account Name</AccountName>
              <AccountBio>
                Inspired by phytopharmacy, we've brought together science and
                nature to create effective active organic skincare. Award
                winning certified skincare.
              </AccountBio>
              <AccountLink href="https://google.com">
                matinala_skincare.com
              </AccountLink>
            </AccountDescriptionSection>

            <ButtonsWrapper>
              <BigButton to="/">Edit Profile</BigButton>
              <SmallButton to="/">Promotion</SmallButton>
              <SmallButton to="/">Insight</SmallButton>
              <SmallButton to="/">Contact</SmallButton>
            </ButtonsWrapper>
          </InfoSection>

          <PostsSection>
            <PostPreview photo='https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></PostPreview>
            <PostPreview photo='https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></PostPreview>
            <PostPreview photo='https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></PostPreview>
            <PostPreview photo='https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></PostPreview>
            <PostPreview photo='https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></PostPreview>
          </PostsSection>
        </MainSection>
      </Layout>
    </>
  );
};

export default UserProfilePage;
