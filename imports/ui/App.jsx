import React from 'react';
import Title from './Title';
import LoginBar from './LoginBar';
import GuitarContainer from './GuitarContainer';


const App = () => (
  <div className="wrapper">
    <LoginBar />
    <Title location="Guitars"/>
    <GuitarContainer />
  </div>
);

export default App;
