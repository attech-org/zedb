import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const UserLikesPage = () => {
  const { username } = useParams();
  return (
      <h1>User Likes: {username}</h1>
  );
};

export { UserLikesPage };
