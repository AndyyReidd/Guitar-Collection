import React from 'react';
import Hello from './Hello.jsx';
import Title from './Title';
import LoginBar from './Login-Bar';
import GuitarBlock from './Guitar-Block.jsx';
import GuitarDiv from './Guitar-Div';
import Navbar from './Navbar.jsx';


const App = () => (
  <div className="wrapper">
    <LoginBar />
    <Title location="Guitars"/>
    <GuitarDiv />
  </div>
);

export default App;
