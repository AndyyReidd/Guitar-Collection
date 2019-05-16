import React from 'react';
import Hello from './Hello.jsx';
import Title from './Title';
import LoginBar from './Login-Bar';
import GuitarBlock from './Guitar-Block.jsx';
import GuitarContainer from './Guitar-Container';


const App = () => (
  <div className="wrapper">
    <LoginBar />
    <Title location="Guitars"/>
    <GuitarContainer />
  </div>
);

export default App;
