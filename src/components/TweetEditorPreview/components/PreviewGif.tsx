import { useSelector } from "usetheform";
import styled from "styled-components";

const PreviewMediaGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
  margin: 10px 0;
`;

const PreviewMediaWrapper = styled.div`
  flex: 1;
  min-width: 240px;
  &:nth-child(even) {
    margin-left: 10px;
  }
  &:nth-child(n + 2) {
    max-width: 245px;
  }
  &:nth-child(n + 3) {
    margin-top: 10px;
  }
`;

const Preview = styled.div`
  width: 100%;
  font-size: 15px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  outline-style: none;
  animation: fadeIn 0.35s ease-in forwards;
  padding-top: 56.25%;
  min-width: 240px;
  img {
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    width: 100%;
    display: block;
    position: absolute;
  }
  video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

const PreviewCloseButton = styled.button`
  cursor: pointer;
  border: 0;
  outline: none;
  background-color: rgba(0, 0, 0, 0.77);
  position: absolute;
  height: 28px;
  width: 28px;
  top: 4px;
  left: 4px;
  border-radius: 50%;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 1.4px;
    height: 60%;
    background-color: white;
    z-index: 1;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 1.4px;
    height: 60%;
    background-color: white;
    z-index: 1;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const PreviewGif = () => {
  const [gif, setGif] = useSelector((state: any) => state.gif);

  const removeGif = () => setGif(null);

  if (!gif?.images) {
    return null;
  }

  return (
    <PreviewMediaGrid>
      <PreviewMediaWrapper>
        <Preview>
          <PreviewCloseButton type="button" onClick={removeGif} />
          <img alt="GIF" src={gif.images.original.url} />
        </Preview>
      </PreviewMediaWrapper>
    </PreviewMediaGrid>
  );
};
