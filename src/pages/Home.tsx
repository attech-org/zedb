import { Link, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

const Home = () => {
  return (
    <>
      <Link to="/sign-up">Sign Up</Link>
      <Link to="/login">Login</Link>

      {
        <Routes>
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      }
    </>
  );
};

export default Home;
