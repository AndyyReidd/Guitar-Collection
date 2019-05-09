import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Login from '/imports/ui/Login';
import App from '/imports/ui/App';
import Signup from '../imports/ui/Signup';

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('react-target'));
});


const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={()=>{
        return (<App />);
      }}/>
      <Route path="/login" render={() =>{
        return (<Login />);
      }}/>
      <Route path="/signup" render={() =>{
        return (<Signup />);
      }}/>
    </Switch>
  </BrowserRouter>
)