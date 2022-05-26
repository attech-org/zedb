import { log } from "console";
import styled from "styled-components";

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Squares = styled.div`
  position: relative;
  padding: 0px 0px 100% 0px;
`;

const SquaresBig = styled(Squares)`
  grid-column: span 2;
  grid-row: span 2;
`;

type pictureTypeObject = {
  url: string;
  big?: boolean | undefined;
};

interface SquareProps {
  pictures: Array<pictureTypeObject>;
}

export const Square: React.FC<SquareProps> = ({ pictures }) => {
  return (
    <>
      {pictures.map((item: pictureTypeObject, i: number) =>
        (!(i % 9) && i % 2) || (!((i - 1) % 9) && i % 2) ? (
          <SquaresBig>{<Img src={item.url} alt="" />}</SquaresBig>
        ) : (
          <Squares>{<Img src={item.url} alt="" />}</Squares>
        )
      )}
    </>
  );
};
// i === 1 ||
// i === 9 ||
// i === 19 ||
// i === 27 ||
// i === 37 ||
// i === 45 ||
// i === 55 ||
// i === 63 ||
// i === 73 ||
// i === 81 ||
// i === 91
