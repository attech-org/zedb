import { Link } from "react-router-dom";
import styled from "styled-components";
import { TweetEditor } from "../components/TweetEditor/TweetEditor";
import TweetForm from "../containers/TweetForm";

const StyledLink = styled(Link)`
  color: red;
  text-decoration: none;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
`;

const Homepage = () => {
  return (
    <div>
      <header>
        <nav>
          <StyledLink to="/login">Login</StyledLink>
          <Link to="/register">Register</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/explore">Search</Link>
        </nav>
      </header>
      <h1>Homepage</h1>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <TweetForm />
    </div>
  );
};

export { Homepage };
