import React from 'react';
import Hello from './Hello.jsx';
import Title from './Title';
import Login from './Login';
import GuitarBlock from './Guitar-Block.jsx';
import GuitarDiv from './Guitar-Div';


const App = () => (
  <div className="wrapper">
    <Login />
    <Title />
    <GuitarDiv />
  </div>
);

export default App;
