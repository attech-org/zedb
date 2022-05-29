import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: red;
  text-decoration: none;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
`

const HomePage = () => {
  return (
    <div>
      <header>
        <nav>
          <StyledLink to="/login">Login</StyledLink>
          <Link to="/register">Register</Link>
        </nav>
      </header>
      <h1>HomePage</h1>
    </div>
  );
};

export { HomePage };
