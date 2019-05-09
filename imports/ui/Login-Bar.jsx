import React, {Component} from 'react';

class LoginBar extends Component{
    render(){
        return(
            <div className="login-bar">
                <a href="login" >Login</a> | <a href="main" >Signup</a>
            </div>
        )
    }
}

export default LoginBar;