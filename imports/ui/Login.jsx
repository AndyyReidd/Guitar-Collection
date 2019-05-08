import React, {Component} from 'react';

class Login extends Component{
    render(){
        return(
            <div className="login-bar">
                <a href="main" >Login</a> | <a href="main" >Signup</a>
            </div>
        )
    }
}

export default Login;