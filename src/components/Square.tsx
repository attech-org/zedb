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

interface SquareProps {
  pictures: Array<string>;
}

export const Square: React.FC<SquareProps> = ({ pictures }) => {
  return (
    <>
      {pictures.map((url: string) => (
        <Squares>{<Img src={url} alt="" />}</Squares>
      ))}
    </>
  );
};
