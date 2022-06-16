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

const AddPhotoDiv = styled.div`
  background-color: rgba(15, 20, 25, 0.75);
  opacity: 0.75;

  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 9999px;
  :hover {
    transition-duration: 0.2s;
    backdrop-filter: blur(4px);
    background-color: rgba(39, 44, 48, 0.75);
  }
`;
const RemovePhotoDiv = styled.div`
  background-color: rgba(15, 20, 25, 0.75);
  opacity: 0.75;

  margin-left: 20px;

  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 9999px;
  :hover {
    transition-duration: 0.2s;
    backdrop-filter: blur(4px);
    background-color: rgba(39, 44, 48, 0.75);
  }
`;
const AddLogoDiv = styled(AddPhotoDiv)`
  position: absolute;
  top: calc(50% - 22px);
  left: calc(50% - 22px);
`;
const ChangePhotoDiv = styled.div`
  display: flex;
  position: absolute;
  top: 40%;
  left: 40%;
`;
const WrapperBannerPicture = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const BackgroundBanner = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;
export const Banner = () => {
  return (
    <Layout>
      <BannerPictureDiv>
        <WrapperBannerPicture>
          {/* GREY BACKGOUND */}
          <BackgroundBanner />
          {/* GREY BACKGOUND */}

          <ChangePhotoDiv>
            <AddPhotoDiv>
              <svg
                fill="rgb(255, 255, 255)"
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g>
                  <path d="M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083h2.146C7.633 3.17 9.722 2 12 2c2.277 0 4.367 1.17 5.562 3.083h2.146C20.972 5.083 22 6.11 22 7.375v12.333C22 20.972 20.972 22 19.708 22zM4.292 6.583c-.437 0-.792.355-.792.792v12.333c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V7.375c0-.437-.355-.792-.792-.792h-2.45c-.317.05-.632-.095-.782-.382-.88-1.665-2.594-2.7-4.476-2.7-1.883 0-3.598 1.035-4.476 2.702-.16.302-.502.46-.833.38H4.293z"></path>
                  <path d="M12 8.167c-2.68 0-4.86 2.18-4.86 4.86s2.18 4.86 4.86 4.86 4.86-2.18 4.86-4.86-2.18-4.86-4.86-4.86zm2 5.583h-1.25V15c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.25H10c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.25V11c0-.414.336-.75.75-.75s.75.336.75.75v1.25H14c.414 0 .75.336.75.75s-.336.75-.75.75z"></path>
                </g>
              </svg>
            </AddPhotoDiv>
            <RemovePhotoDiv>
              <svg
                fill="rgb(255, 255, 255)"
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g>
                  <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path>
                </g>
              </svg>
            </RemovePhotoDiv>
          </ChangePhotoDiv>

          <BannerPictureImg
            src="https://pbs.twimg.com/profile_banners/1497323789616623622/1653757453/600x200"
            alt=""
          ></BannerPictureImg>
        </WrapperBannerPicture>
      </BannerPictureDiv>
      <LogoDiv>
        <AddLogoDiv>
          <svg
            fill="rgb(255, 255, 255)"
            width="22px"
            height="22px"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g>
              <path d="M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083h2.146C7.633 3.17 9.722 2 12 2c2.277 0 4.367 1.17 5.562 3.083h2.146C20.972 5.083 22 6.11 22 7.375v12.333C22 20.972 20.972 22 19.708 22zM4.292 6.583c-.437 0-.792.355-.792.792v12.333c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V7.375c0-.437-.355-.792-.792-.792h-2.45c-.317.05-.632-.095-.782-.382-.88-1.665-2.594-2.7-4.476-2.7-1.883 0-3.598 1.035-4.476 2.702-.16.302-.502.46-.833.38H4.293z"></path>
              <path d="M12 8.167c-2.68 0-4.86 2.18-4.86 4.86s2.18 4.86 4.86 4.86 4.86-2.18 4.86-4.86-2.18-4.86-4.86-4.86zm2 5.583h-1.25V15c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.25H10c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.25V11c0-.414.336-.75.75-.75s.75.336.75.75v1.25H14c.414 0 .75.336.75.75s-.336.75-.75.75z"></path>
            </g>
          </svg>
        </AddLogoDiv>

        <LogoImg
          src="https://bipbap.ru/wp-content/uploads/2017/12/0f92147ad2284aae418b40faf24dc68902960019_hq-640x456.jpg"
          alt=""
        ></LogoImg>
      </LogoDiv>
    </Layout>
  );
};
