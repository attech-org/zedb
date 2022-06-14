import styled from "styled-components";

const Layout = styled.div`
  padding-bottom: 85px;
  margin-top: 53px;
  max-height: 200px;
  height: 100%;
  position: relative;
`;
const BannerPictureDiv = styled.div`
  background: grey;
  height: 200px;
  width: 100%;
`;

const BannerPictureImg = styled.img`
  width: 100%;
  height: 100%;
`;
const LogoDiv = styled.div`
  background: grey;
  position: absolute;
  bottom: 15px;
  left: 15px;
  width: 112px;
  height: 112px;
  border-radius: 9999px;
  border: 4px solid white;
`;
const LogoImg = styled.img`
  width: inherit;
  height: inherit;
  border-radius: 9999px;
`;

export const Banner = () => {
  return (
    <Layout>
      <BannerPictureDiv>
        <BannerPictureImg
          src="https://pbs.twimg.com/profile_banners/1497323789616623622/1653757453/600x200"
          alt=""
        ></BannerPictureImg>
      </BannerPictureDiv>
      <LogoDiv>
        <LogoImg
          src="https://bipbap.ru/wp-content/uploads/2017/12/0f92147ad2284aae418b40faf24dc68902960019_hq-640x456.jpg"
          alt=""
        ></LogoImg>
      </LogoDiv>
    </Layout>
  );
};
