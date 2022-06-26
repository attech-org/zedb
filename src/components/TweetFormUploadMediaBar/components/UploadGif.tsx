import { useEffect, useState } from "react";
import { useField } from "usetheform";
import UpladGifSVG from "../../../assets/images/gifupload.svg";
import ArrowBackSVG from "../../../assets/images/arrowback.svg";
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const UploadGifBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background: none;
  outline: none;
  border: 0;

  &:hover {
    background-color: rgba(27, 149, 224, 0.1);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const GifGridDiv = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 0.35s ease-in forwards;
`;

const GifGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;

  @media only screen and (max-width: 650px) {
    height: 100%;
    border-radius: 0;
  }
`;

const GifGridBackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  outline: none;
  cursor: pointer;
  border: 0;
  border-radius: 50%;
  height: 39px;
  width: 39px;

  &:hover {
    background-color: rgba(27, 149, 224, 0.1);
  }
`;

const GifGridHeader = styled.div`
  display: flex;
  padding: 0px 10px;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  height: 50px;
`;

const GifGridContent = styled.div`
  box-sizing: border-box;
  padding: 10px;
  height: 600px;
  overflow: auto;

  @media only screen and (max-width: 650px) {
    height: 100%;
  }
`;

export const UploadGif = ({ disabled }: any) => {
  const { setValue } = useField({ type: "custom", name: "gif" });
  const [showGrid, toggleGrid] = useState(() => false);
  const toggleGifGrid = () => toggleGrid((prev) => !prev);
  const onGifClick = (gif: any, e: any) => {
    e.preventDefault();
    setValue(gif);
    toggleGifGrid();
  };
  return (
    <div>
      <UploadGifBtn type="button" disabled={disabled} onClick={toggleGifGrid}>
        <img alt="Upload GIF" src={UpladGifSVG} />
      </UploadGifBtn>
      {showGrid && (
        <GifGrid onCloseGifGrid={toggleGifGrid} onGifClick={onGifClick} />
      )}
    </div>
  );
};

const fetchGifs = (offset: any) => giphyFetch.trending({ offset, limit: 10 });
const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");
const maxWidth = 600;
function GifGrid({ onGifClick, onCloseGifGrid }: any) {
  const [width, setWidth] = useState(window.innerWidth - 20);

  useEffect(() => {
    const resize = ({ target }: any) => {
      const { innerWidth } = target;
      const newWidth = innerWidth <= maxWidth ? innerWidth : maxWidth;
      setWidth(newWidth - 28);
    };

    resize({ target: window });
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <GifGridDiv>
      <GifGridWrapper>
        <GifGridHeader>
          <GifGridBackBtn>
            <img onClick={onCloseGifGrid} alt="Go back" src={ArrowBackSVG} />
          </GifGridBackBtn>
        </GifGridHeader>
        <GifGridContent>
          <Grid
            onGifClick={onGifClick}
            fetchGifs={fetchGifs}
            width={width}
            columns={3}
            gutter={6}
          />
        </GifGridContent>
      </GifGridWrapper>
    </GifGridDiv>
  );
}
