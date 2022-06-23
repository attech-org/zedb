import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Aboutpage } from "./pages/Aboutpage";
import { Blogpage } from "./pages/Blogpage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Layout from "./components/Layout";
import { Home } from "./pages/Home";
import SearchPage from "./pages/SearchPage";

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
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />

          <Route path="/posts" element={<Home />} />
          <Route path="/explore" element={<SearchPage />} />

          <Route path="/about" element={<Aboutpage />} />
          <Route path="/blog" element={<Blogpage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
