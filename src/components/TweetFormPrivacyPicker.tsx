import { useState, useEffect, useRef } from "react";
import { Input, useSelector } from "usetheform";

import WorldSVG from "../assets/images/world.svg";
import PrivacySVG_0 from "../assets/images/privacy-world.svg";
import PrivacySVG_1 from "../assets/images/privacy-following.svg";
import PrivacySVG_2 from "../assets/images/privacy-mentioned.svg";

import styled, { keyframes } from "styled-components";

const labels: any = {
  0: "Everyone",
  1: "People you follow",
  2: "Only people you mention",
};

const fadeIn = keyframes`
    from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const PrivacyPicker = styled.div`
  position: relative;
`;

const PrivacyPickerBtn = styled.button`
  padding: 6px 8px;
  outline: none;
  border-radius: 50px;
  cursor: pointer;
  border: 0;
  background: none;
  display: flex;
  align-items: center;
  font-weight: 800;
  color: rgb(27, 149, 224);
  img {
    height: 16px;
    width: 16px;
    margin-right: 4px;
  }
  &:hover {
    background-color: rgba(27, 149, 224, 0.1);
  }
`;

const PrivacySelection = styled.div`
  max-width: 295px;
  height: 0;
  width: 0;
  overflow: hidden;
  text-align: left;
  box-sizing: border-box;
  border: 1px solid rgba(27, 149, 224, 0.1);
  border-radius: 10px;
  position: absolute;
  margin-top: 7px;
  z-index: 1;
  background-color: white;
  &[data-visible=${"true"}] {
    height: auto;
    width: 100%;
    padding: 10px 0;
    animation: ${fadeIn} 0.35s ease-in forwards;
  }
`;

const PrivacySelectionHeader = styled.div`
  padding: 0 10px;
  box-sizing: border-box;
  font-weight: 700;
`;

const PrivacySelectionHint = styled.div`
  padding: 0 10px;
  box-sizing: border-box;
  margin-top: 4px;
`;

const PrivacySelectionRadios = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const StyledRadioWithLabel = styled.div`
  display: flex;
  flex-shrink: 0;

  input[type=${"radio"}] {
    display: none;
  }

  input[type=${"radio"}]:checked + label::after {
    content: "✓";
    position: absolute;
    color: rgb(27, 149, 224);
    border-radius: 50%;
    left: auto;
    right: 16px;
  }
`;

const Label = styled.label`
  width: 100%;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  position: relative;

  &:hover {
    background-color: rgba(247, 249, 250, 0.7);
  }

  img {
    padding: 7px;
    height: 25px;
    border-radius: 50%;
    width: auto;
    background-color: rgb(27, 149, 224);
    margin-right: 8px;
  }
`;

export const TweetFormPrivacyPicker = () => {
  const [visible, setVisibility] = useState(() => false);
  const [postPrivacy] = useSelector((state: any) => state.postPrivacy);

  const label = labels[postPrivacy] || labels[0];
  const bntLabel = `${label} can reply`;

  const refPicker = useClickOutPicker(() => {
    visible && setVisibility(false);
  });

  const toggle = (e: any) => {
    e.stopPropagation();
    setVisibility((prev) => !prev);
  };

  // for each value change it closes the Picker
  useEffect(() => {
    if (postPrivacy !== undefined) {
      setVisibility(false);
    }
  }, [postPrivacy]);

  return (
    <PrivacyPicker>
      <PrivacyPickerBtn type="button" onClick={toggle}>
        <img alt={bntLabel} src={WorldSVG} />
        <span>{bntLabel}</span>
      </PrivacyPickerBtn>
      <PrivacySelection ref={refPicker} data-visible={visible}>
        <PrivacySelectionHeader>Who can reply?</PrivacySelectionHeader>
        <PrivacySelectionHint>
          Choose who can reply to this Tweet. Anyone mentioned can always reply.
        </PrivacySelectionHint>
        <PrivacySelectionRadios>
          <RadioWithLabel img={PrivacySVG_0} id="everyone" value="0" checked>
            {labels[0]}
          </RadioWithLabel>
          <RadioWithLabel img={PrivacySVG_1} id="onlyfollower" value="1">
            {labels[1]}
          </RadioWithLabel>
          <RadioWithLabel img={PrivacySVG_2} id="onlymentioned" value="2">
            {labels[2]}
          </RadioWithLabel>
        </PrivacySelectionRadios>
      </PrivacySelection>
    </PrivacyPicker>
  );
};

function RadioWithLabel({
  id,
  img,
  name = "postPrivacy",
  children,
  value,
  checked,
}: any) {
  return (
    <StyledRadioWithLabel>
      <Input type="radio" id={id} name={name} value={value} checked={checked} />
      <Label htmlFor={id}>
        <img alt="privacy" src={img} />
        <span>{children}</span>
      </Label>
    </StyledRadioWithLabel>
  );
}

const useClickOutPicker = (cb: any) => {
  const ref: any = useRef(null);
  useEffect(() => {
    const clickOut = (e: any) => {
      if (!ref.current.contains(e.target)) {
        cb(e);
      }
    };
    window.addEventListener("click", clickOut);
    return () => {
      window.removeEventListener("click", clickOut);
    };
  }, [cb]);
  return ref;
};
