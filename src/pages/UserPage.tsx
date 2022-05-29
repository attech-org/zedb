import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const UserPage = () => {
  const { username } = useParams();
  return (
      <h1>User: {username}</h1>
  );
};

export { UserPage };
