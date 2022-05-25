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

// const Rectangle = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   background: #d12f2f;
//   width: 100%;
//   height: 100%;
//   /* grid-auto-rows: 115px; */
//   grid-gap: 2px;
// `;
// const RectangleRight = styled(Rectangle)`
//   grid-template-columns: 1fr 2fr;
// `;
// const RectangleLeft = styled(Rectangle)`
//   grid-template-columns: 2fr 1fr;
// `;

// const SquareRight = styled(Square)`
//   grid-column: 2/2;
//   grid-row: 1/3;
// `;
// const SquareLeft = styled(Square)`
//   grid-column: 1/1;
//   grid-row: 1/3;
// `;

const Container = styled.div`
  width: 100%;
  display: grid;
  gap: 2px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const SearchPage = () => {
  const pictures = [
    "https://funart.pro/uploads/posts/2021-03/1617054432_6-p-oboi-priroda-4k-6.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNucRKn044wOGq4vv4_xDngt3hH2RvvpPHw&usqp=CAU",
    "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg",
    "https://funart.pro/uploads/posts/2021-03/1617054432_6-p-oboi-priroda-4k-6.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNucRKn044wOGq4vv4_xDngt3hH2RvvpPHw&usqp=CAU",
    "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg",
    "https://funart.pro/uploads/posts/2021-03/1617054432_6-p-oboi-priroda-4k-6.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNucRKn044wOGq4vv4_xDngt3hH2RvvpPHw&usqp=CAU",
    "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg",
    "https://funart.pro/uploads/posts/2021-03/1617054432_6-p-oboi-priroda-4k-6.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNucRKn044wOGq4vv4_xDngt3hH2RvvpPHw&usqp=CAU",
    "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg",
    "https://funart.pro/uploads/posts/2021-03/1617054432_6-p-oboi-priroda-4k-6.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNucRKn044wOGq4vv4_xDngt3hH2RvvpPHw&usqp=CAU",
    "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg",
    "https://funart.pro/uploads/posts/2021-03/1617054432_6-p-oboi-priroda-4k-6.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNucRKn044wOGq4vv4_xDngt3hH2RvvpPHw&usqp=CAU",
    "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg",
  ];

  return (
    <Main>
      <Layout>
        <SearchInput />
        <Container>
          <Square pictures={pictures} />
        </Container>

        {/* <RectangleRight>
          <Square>
            <ImgDiv></ImgDiv>1
          </Square>
          <SquareRight>
            <ImgDiv></ImgDiv>2
          </SquareRight>
          <Square>
            <ImgDiv></ImgDiv>3
          </Square>
        </RectangleRight>
        <Rectangle>
          <Square>
            <ImgDiv></ImgDiv>1
          </Square>
          <Square>
            <ImgDiv></ImgDiv>2
          </Square>
          <Square>
            <ImgDiv></ImgDiv>3
          </Square>
        </Rectangle>
        <Rectangle>
          <Square>
            <ImgDiv></ImgDiv>1
          </Square>
          <Square>
            <ImgDiv></ImgDiv>2
          </Square>
          <Square>
            <ImgDiv></ImgDiv>3
          </Square>
        </Rectangle>
        <RectangleLeft>
          <Square>
            <ImgDiv></ImgDiv>1
          </Square>
          <SquareLeft>
            <ImgDiv></ImgDiv>2
          </SquareLeft>
          <Square>
            <ImgDiv></ImgDiv>3
          </Square>
        </RectangleLeft> */}
      </Layout>
    </Main>
  );
};

export default SearchPage;
