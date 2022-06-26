import { useForm } from "usetheform";
import styled from "styled-components";

const SubmitButton = styled.button`
  padding: 0px 24px;
  outline: none;
  border-radius: 50px;
  cursor: pointer;
  border: 0;
  background: none;
  display: flex;
  align-items: center;
  font-weight: 800;
  color: white;
  background-color: rgb(26, 145, 218);
  flex-shrink: 0;

  &:disabled {
    cursor: initial;
    background-color: rgb(142, 208, 249);
  }

  &:enabled:hover {
    background-color: rgb(19, 122, 185);
  }
`;

const TweetSpan = styled.span`
    letter-spacing: 1.2px;
`;

export const TweetFormSubmit = () => {
  const { isValid, pristine, state } = useForm();
  const isEmpty = !state.editor?.plainText && !state.media && !state.gif;
  return (
    <SubmitButton disabled={!isValid || pristine || isEmpty} type="submit">
      <TweetSpan>Tweet</TweetSpan>
    </SubmitButton>
  );
};
