import styled from "styled-components";
import { SearchInput } from "../components/SearchInput";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
`;

const Layout = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  width: 350px;
  border-radius: 15px;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: grid;
  grid-row-gap: 2px;
`;

const Rectangle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* background: #d12f2f; */
  width: 100%;
  grid-auto-rows: 115px;
  grid-gap: 2px;
`;
const RectangleRight = styled(Rectangle)`
  grid-template-columns: 1fr 2fr;
`;
const RectangleLeft = styled(Rectangle)`
  grid-template-columns: 2fr 1fr;
`;

const Square = styled.div`
  /* background: #abb6bbfd; */
  background-image: url(https://funart.pro/uploads/posts/2021-03/1617054432_6-p-oboi-priroda-4k-6.jpg);
  background-size: cover;
`;

const SquareRight = styled(Square)`
  grid-column: 2/2;
  grid-row: 1/3;
`;
const SquareLeft = styled(Square)`
  grid-column: 1/1;
  grid-row: 1/3;
`;

// const ImgDiv = styled.span`
// background-image: url(https://funart.pro/uploads/posts/2021-03/1617054432_6-p-oboi-priroda-4k-6.jpg); */
// `;

const SearchPage = () => {
  return (
    <Main>
      <Layout>
        <SearchInput />
        <RectangleRight>
          <Square>{/* <ImgDiv></ImgDiv> */}1</Square>
          <SquareRight>{/* <ImgDiv></ImgDiv> */}2</SquareRight>
          <Square>{/* <ImgDiv></ImgDiv> */}3</Square>
        </RectangleRight>
        <Rectangle>
          <Square>{/* <ImgDiv></ImgDiv> */}1</Square>
          <Square>{/* <ImgDiv></ImgDiv> */}2</Square>
          <Square>{/* <ImgDiv></ImgDiv> */}3</Square>
        </Rectangle>
        <Rectangle>
          <Square>{/* <ImgDiv></ImgDiv> */}1</Square>
          <Square>{/* <ImgDiv></ImgDiv> */}2</Square>
          <Square>{/* <ImgDiv></ImgDiv> */}3</Square>
        </Rectangle>
        <RectangleLeft>
          <Square>{/* <ImgDiv></ImgDiv> */}1</Square>
          <SquareLeft>{/* <ImgDiv></ImgDiv> */}2</SquareLeft>
          <Square>{/* <ImgDiv></ImgDiv> */}3</Square>
        </RectangleLeft>
      </Layout>
    </Main>
  );
};

export default SearchPage;
