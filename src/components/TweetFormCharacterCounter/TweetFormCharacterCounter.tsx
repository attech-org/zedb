import { useSelector } from "usetheform";
import { ProgressRingBar } from "./ProgressRingBar";
import { getProgressRingBarProps } from "./utils/getProgressRingBarProps";
import styled from "styled-components";

const ProgressRingBarWrapper = styled.div`
  transition: transform 0.2s ease-in-out;
  will-change: transform;

  &[data-ui=${"smallRing"}] {
    transform: scale(0.8);
  }

  &[data-ui=${"bigRing"}] {
    transform: scale(1);
  }
`;

export const TweetFormCharacterCounter = ({ maxChars }: any) => {
  const [plainText] = useSelector((state: any) => state.editor.plainText);

  const { uiStatus, ...propsRingBar } = getProgressRingBarProps(
    plainText,
    maxChars
  );

  return (
    <ProgressRingBarWrapper data-ui={uiStatus}>
      <ProgressRingBar {...propsRingBar} />
    </ProgressRingBarWrapper>
  );
};
