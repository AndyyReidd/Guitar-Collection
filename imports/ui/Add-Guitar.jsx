import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Navbar from './Navbar';
import Title from './Title';
import LoginBar from './Login-Bar';

class AddGuitar extends TrackerReact(Component) {
    render() {
        return (
            <div className="wrapper">
                <LoginBar/>
                <Title location="Add Guitar"/>
                
            </div>
        );
    }
}

export default AddGuitar;
