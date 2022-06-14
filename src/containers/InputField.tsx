import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #a4abd4; */
  padding: 0px 16px;
`;
const Input = styled.input`
  font-size: 15px;
  font-weight: 500;
  border-radius: 4px;
  /* border-color: rgb(207, 217, 222); */
  outline-width: 2px;
  outline-color: #1d9bf0;

  border: 1px solid rgb(207, 217, 222);
  margin-bottom: 25px;

  padding-bottom: 16px;
  padding-top: 16px;

  padding-left: 8px;
  padding-right: 8px;
`;
const InputBio = styled(Input)`
  height: 60px;
  padding-bottom: 20px;
  padding-top: 0px;
`;

export const InputField = () => {
  return (
    <Layout>
      <Input placeholder="Name" />
      <InputBio placeholder="Bio" />
      <Input placeholder="Location" />
      <Input placeholder="Website" />
    </Layout>
  );
};
