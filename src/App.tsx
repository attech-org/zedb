import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { changeTheme } from './redux/app/reducers';
import styled from 'styled-components';

const Layout = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme === "dark" ? 'grey' : 'white'};
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
`

const App = () => {
  const dispatch = useDispatch();
  const appTheme = useSelector<RootState, RootState['app']['theme']>((store) => store.app.theme);

  const handleThemeClick = () => {
    dispatch(changeTheme());
  }

  return (
    <Layout theme={appTheme}>
      {appTheme}
      <Button onClick={handleThemeClick}>Change Theme</Button>
    </Layout>
  );
}

export default App;
