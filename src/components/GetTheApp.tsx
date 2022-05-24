import styled from "styled-components";

const Layout = styled.div`
  max-width: 350px;
  text-align: center;
  margin-top: 10px;
`;
const P = styled.p`
  color: #262626;
  font-size: 14px;
  line-height: 18px;
  margin: 10px 20px 10px 20px;
  text-align: center;
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  margin: 10px 0 10px 0;
`;
const Img1 = styled.img`
  height: 40px;
  margin-right: 4px;
`;
const Img2 = styled.img`
  height: 40px;
  margin-left: 4px;
`;
export const GetTheApp = () => {
  return (
    <Layout>
      <P>Get the app.</P>
      <Wrapper>
        <a
          aria-label="Download on the App Store"
          href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo"
        >
          <Img1
            alt="Download on the App Store"
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
          />
        </a>
        <a
          aria-label="Get it on Google Play"
          href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D470A3F8A-9A72-417A-9412-7B2E97488428%26utm_content%3Dlo%26utm_medium%3Dbadge"
        >
          <Img2
            alt="Get it on Google Play"
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
          />
        </a>
      </Wrapper>
    </Layout>
  );
};
