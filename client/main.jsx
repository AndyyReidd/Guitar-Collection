import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Login from '/imports/ui/Login';
import App from '/imports/ui/App';
import Signup from '../imports/ui/Signup';
import AddGuitar from '../imports/ui/Add-Guitar';

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('react-target'));
});


const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/add-guitar" component={AddGuitar}/>
    </Switch>
  </BrowserRouter>
)