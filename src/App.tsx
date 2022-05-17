import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

const App = () => {
  const myValue = useSelector<RootState, RootState['users']>((store) => store.users);
  return (
    <div className="App">
      {myValue.name}
    </div>
  );
}

export default App;
