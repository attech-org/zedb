import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const UserMediaPage = () => {
  const { username } = useParams();
  return (
      <h1>User Media: {username}</h1>
  );
};

export { UserMediaPage };
