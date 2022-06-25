import { Link, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Aboutpage } from "./pages/Aboutpage";
import { Blogpage } from "./pages/Blogpage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { NotificationsPage } from "./pages/NotificationsPage";
import { MessagesPage } from "./pages/MessagesPage";
import { UserWithRepliesPage } from "./pages/UserWithRepliesPage";
import { UserPostPage } from "./pages/UserPostPage";
import { UserLikesPage } from "./pages/UserLikesPage";
import { UserMediaPage } from "./pages/UserMediaPage";
import { UserPage } from "./pages/UserPage";
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
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />

          <Route path="/posts" element={<Home />} />
          <Route path="/explore" element={<SearchPage />} />

          <Route path="/about" element={<Aboutpage />} />
          <Route path="/blog" element={<Blogpage />} />

        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/with_replies" element={<UserWithRepliesPage />} />
        <Route path="/:username/media" element={<UserMediaPage />} />
        <Route path="/:username/likes" element={<UserLikesPage />} />
        <Route path="/:username/post/:postId" element={<UserPostPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
