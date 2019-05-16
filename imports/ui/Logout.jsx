import React, { Component } from 'react';
import {Meteor} from 'meteor/meteor';
import {Link} from 'react-router-dom';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);        
    }
    

    render() {
        return <Link to='login' onClick={this.handleClick}>Logout </Link>;
    }

    handleClick = () => {
        Meteor.logout(
            (err) => {console.log(err)}
        );
        sessionStorage.removeItem('username');
    }
}

export default Logout;
