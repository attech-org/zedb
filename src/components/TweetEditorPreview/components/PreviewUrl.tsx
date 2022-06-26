import { useEffect, useState } from "react";
import { useSelector } from "usetheform";
import AnchorSvg from "../../../assets/images/anchor.svg";
import { getPreview } from "./utils/getPreview";
import styled from "styled-components";

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

const Preview = styled.div`
  display: flex;
  font-size: 15px;
  position: relative;
  border: 1px solid rgb(196, 207, 214);
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  overflow: hidden;
  outline-style: none;
  animation: fadeIn 0.35s ease-in forwards;
  margin: 0 0 10px 0;
`;

const PreviewUrlImg = styled.div`
  width: 25%;
  padding-top: 25%;
  position: relative;
  overflow: hidden;
  min-width: 84px;
  img {
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    height: 100%;
    display: block;
    position: absolute;
  }
`;

const PreviewUrlContent = styled.div`
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
`;

const PreviewUrlDesc = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const PreviewUrlFooter = styled.div`
  img {
    height: 16px;
    width: 16px;
    margin-right: 4px;
  }
`;

export const PreviewUrl = () => {
  const [previewCard, setPreview] = useState(() => null);
  const [enablePreview, setEnablePreview] = useState(() => true);
  const [plainText = ""] = useSelector((state: any) => state.editor.plainText);

  useEffect(() => {
    let cancel = false;
    getPreview(plainText).then((card) => {
      !cancel && setPreview(card);
    });
    return () => {
      cancel = true;
    };
  }, [plainText]);

  if (!enablePreview || !previewCard) {
    return null;
  }

  const disablePreview = () => setEnablePreview(false);
  const { binding_values = {} }: any = previewCard;
  const { title, description, vanity_url, player_image } = binding_values;

  return (
    <Preview>
      <PreviewUrlImg>
        <PreviewCloseButton type="button" onClick={disablePreview} />
        <img alt={title.string_value} src={player_image.image_value.url} />
      </PreviewUrlImg>
      <PreviewUrlContent>
        <div>{title.string_value}</div>
        <PreviewUrlDesc>{description.string_value}</PreviewUrlDesc>
        <PreviewUrlFooter>
          <img alt={vanity_url.string_value} src={AnchorSvg} />
          <span>{vanity_url.string_value}</span>
        </PreviewUrlFooter>
      </PreviewUrlContent>
    </Preview>
  );
};
