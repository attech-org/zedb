import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { changeTheme } from "./redux/app/reducers";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";

const App = () => {
  // const dispatch = useDispatch();
  // const appTheme = useSelector<RootState, RootState["app"]["theme"]>(
  //   (store) => store.app.theme
  // );

  // const handleThemeClick = () => {
  //   dispatch(changeTheme());
  // };

  return (
    <>
      <LoginPage />
      {/* <SignUpPage /> */}
    </>
  );
};

export default App;
