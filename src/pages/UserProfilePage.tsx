import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import UserMeasurableInfo from "../components/UserMeasurableInfo";

const Layout = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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

const UserInfoSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AvatarAndMeasurableInfoSection = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  padding: 10px 12px 0 12px;
  gap: 10%;
`;

const Avatar = styled.img`
  border-radius: 100%;
  width: 70px;
  height: 70px;
  margin-right: -35px;
  cursor: pointer;

  /* :after{
    content: '';
    background: black;
    width: 200px;
    height: 200px;
    position: relative;
    display: block;
  } */
`;

const AvatarPlusIcon = styled.img`
  border-radius: 100%;
  width: 18px;
  height: 18px;
  position: relative;
  right: 15px;
  bottom: -22px;
  cursor: pointer;
`;

const AccountDescriptionSection = styled.div`
  width: 100%;
  padding: 10px 12px 0 12px;
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
  
  :visited{
    color: 49d1ffs;
  }
`;

const UserPostsSection = styled.div`
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

        <UserInfoSection>
          
          <AvatarAndMeasurableInfoSection>
            <Avatar src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Avatar>
            <AvatarPlusIcon src={require('../assets/images/avatar-plus.png')}></AvatarPlusIcon>
            <UserMeasurableInfo variableName='Posts' quantity='244'></UserMeasurableInfo>
            <UserMeasurableInfo variableName='Followers' quantity='4,453'></UserMeasurableInfo>
            <UserMeasurableInfo variableName='Following' quantity='806'></UserMeasurableInfo>
            </AvatarAndMeasurableInfoSection>

            <AccountDescriptionSection>
              <AccountName>Account Name</AccountName>
              <AccountBio>
                Inspired by phytopharmacy, we've brought together science and nature to create effective active organic skincare. Award winning certified skincare.
              </AccountBio>
              <AccountLink href='https://google.com'>matinala_skincare.com</AccountLink>
            </AccountDescriptionSection>   

          </UserInfoSection>

          <UserPostsSection>

          </UserPostsSection>

        </MainSection>
      </Layout>
    </>
  );
};

export default UserProfilePage;
