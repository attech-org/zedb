import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const UserPostPage = () => {
  const { username, postId } = useParams();
  return (
      <h1>{username}'s post: {postId}</h1>
  );
};

export { UserPostPage };
