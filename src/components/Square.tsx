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

interface SquareProps {
  pictures: Array<string>;
}

export const Square: React.FC<SquareProps> = ({ pictures }) => {
  return (
    <>
      {pictures.map((url: string, i: number) =>
        i === 1 ||
        // i! % 9 ||
        // (i + 1) % 9 ||
        i === 9 ||
        i === 19 ||
        i === 27 ||
        i === 37 ||
        i === 45 ||
        i === 55 ||
        i === 63 ||
        i === 73 ||
        i === 81 ||
        i === 91 ? (
          <SquaresBig>{<Img src={url} alt="" />}</SquaresBig>
        ) : (
          <Squares>{<Img src={url} alt="" />}</Squares>
        )
      )}
    </>
  );
};
