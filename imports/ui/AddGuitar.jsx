import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Title from './Title';
import LoginBar from './LoginBar';

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
