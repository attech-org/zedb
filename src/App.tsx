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
      <Link to='/home'>Home</Link>  
      <br /> 
      <Link to='/notifications'>Notifications</Link>
      <br />
      <Link to='/messages'>Messages</Link>
      <br />
      <Link to='/vasyagladush'>VasyaGladush</Link>      
      <br />
      <Link to='/vasyagladush/with_replies'>VasyaGladushWithReplies</Link>      
      <br />
      <Link to='/vasyagladush/media'>VasyaGladushMedia</Link>      
      <br />
      <Link to='/vasyagladush/likes'>VasyaGladushLikes</Link>      
      <br />
      <Link to='/vasyagladush/post/uuid'>VasyaGladushPost</Link>      
      <br />

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/with_replies" element={<UserWithRepliesPage />} />
        <Route path="/:username/media" element={<UserMediaPage />} />
        <Route path="/:username/likes" element={<UserLikesPage />} />
        <Route path="/:username/post/:postId" element={<UserPostPage />} />
      </Routes>
    </>
  );
};

export default App;
