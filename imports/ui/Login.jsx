import React, {Component} from 'react';
import Title from './Title';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
import {Link} from 'react-router-dom';


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : ''
        }

        this.usernameChanged = this.usernameChanged.bind(this);
        this.passwordChanged = this.passwordChanged.bind(this);

    }


    render(){
        return(
            <div className="wrapper">
                <Title />
                <p>Please fill in your credentials to login.</p>
                <div>
                    <label>Username</label>
                    <input type="text" autoFocus={true} onChange={this.usernameChanged}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={this.passwordChanged}/>
                </div>
                <p className="error-message"></p>
                <div>
                    <button className="form-button" onClick={this.loginUser}>Login</button>
                </div>
                <p>Don't have an account? <Link to="signup">Sign up now</Link>.</p>
            </div>
        );
    }

    loginUser = () =>{
        Meteor.loginWithPassword(
            this.state.username,
            this.state.password
        );
    }

    usernameChanged = (e) =>{
        let username = e.target.value;

        this.setState({
            username : username
        })

        console.log(username);

    }

    passwordChanged = (e) => {
        let password = e.target.value;

        this.setState({
            password : password
        })
        console.log(password);
    }
  

}



export default Login;