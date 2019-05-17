import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logout from './Logout';

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
                    <p>
                        Logged in as {sessionStorage['username']}<br/>
                        <Logout/>
                    </p>
                </div>
            );
        }
    }



}

export default LoginBar;