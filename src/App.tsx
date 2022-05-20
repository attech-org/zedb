import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { changeTheme } from "./redux/app/reducers";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Aboutpage } from "./components/Aboutpage";
import { Blogpage } from "./components/Blogpage";
import LoginPage from "./pages/LoginPage";

const Header = styled.header`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #8d9df5;
`;

const Layout = styled.main`
  width: 100vw;
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.theme === "dark" ? "grey" : "white")};
`;

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid black;
`;

const App = () => {
  const dispatch = useDispatch();
  const appTheme = useSelector<RootState, RootState["app"]["theme"]>(
    (store) => store.app.theme
  );

  const handleThemeClick = () => {
    dispatch(changeTheme());
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/blog" element={<Blogpage />} />
      </Routes>
    </>
  );
};

export default App;
