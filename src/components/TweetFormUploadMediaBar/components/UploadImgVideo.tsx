import { Input } from "usetheform";
import UpladImgSVG from "../../../assets/images/uploadimages.svg";
import styled from "styled-components";

const UploadImgVideoLabel = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 40px;
  width: 40px;

  &:hover {
    background-color: rgba(27, 149, 224, 0.1);
  }

  &[data-disabled=${"true"}] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  input {
    width: 0;
    height: 0;
  }
`;

export const UploadImgVideo = ({ disabled }: any) => {
  return (
    <UploadImgVideoLabel
      data-disabled={disabled}
      htmlFor="media"
    >
      <img alt="Upload" src={UpladImgSVG} />
      <Input disabled={disabled} type="file" multiple name="media" id="media" />
    </UploadImgVideoLabel>
  );
};
