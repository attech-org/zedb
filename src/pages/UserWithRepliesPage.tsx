import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const UserWithRepliesPage = () => {
  const { username } = useParams();
  return (
      <h1>User with Replies: {username}</h1>
  );
};

export { UserWithRepliesPage };
