import styled from "styled-components";

const Layout = styled.div`
  border: 1px solid #eeeeee;
  border-top: none;
  padding: 0px 16px;
  height: 100px;
  font-size: 15px;

  display: flex;
`;

const InputField = styled.div``;

const Logo = styled.img`
  height: 48px;
  width: 48px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Homefeed = () => {
  let logo = [
    {
      url: "https://bipbap.ru/wp-content/uploads/2017/12/0f92147ad2284aae418b40faf24dc68902960019_hq-640x456.jpg",
    },
  ];
  return (
    <>
      <Layout>
        {logo.map((picture) => (
          <Logo src={picture.url} alt=""></Logo>
        ))}
        <InputField></InputField>
      </Layout>
    </>
  );
};
