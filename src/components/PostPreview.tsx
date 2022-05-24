import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Photo = styled.img`
  width: 100%;
  height: 100%;
`;

const PostPreview = (props: any) => {
  return (
    <>
      <Link to="/">
        <Photo src={props.photo} alt="" />
      </Link>
    </>
  );
};

export default PostPreview;
