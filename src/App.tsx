import './styles/App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { changeTheme } from './redux/app/reducers';

const App = () => {
  const dispatch = useDispatch();
  const appTheme = useSelector<RootState, RootState['app']['theme']>((store) => store.app.theme);

  const handleThemeClick = () => {
    dispatch(changeTheme());
  }

  return (
    <div className="App">
      {appTheme}
      <button onClick={handleThemeClick}>Change Theme</button>
    </div>
  );
}

export default App;
