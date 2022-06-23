import styled from "styled-components";
import { SearchInput } from "../components/SearchInput";
import { Square } from "../components/Square";

const Main = styled.main`
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
`;

const Layout = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  height: 100%;
  width: 350px;
  border-radius: 15px;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 10px;
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  gap: 2px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const SearchPage = () => {
  const pictures = [...new Array(100).fill(false)].map((_el, i) => ({
    url: `https://via.placeholder.com/${40 + i}0`,
  }))

  return (
    <Main>
      <Layout>
        <SearchInput />
        <Container>
          <Square pictures={pictures} />
        </Container>

        <footer></footer>
      </Layout>
    </Main>
  );
};

export default SearchPage;
