import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {Link} from 'react-router-dom';

class LoginBar extends Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        if(!sessionStorage['username']){
            return(            
                <div className="login-bar">
                    <Link to="login" >Login</Link> | <Link to="signup" >Signup</Link>
                </div>
            );
        }
        else{
            return(            
                <div className="login-bar">
                    <p>Logged in as {sessionStorage['username']}</p>
                </div>
            );
        }
    }



}

export default LoginBar;