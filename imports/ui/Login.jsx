import React, {Component} from 'react';
import Title from './Title';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : ''
        }

        this.usernameChanged = this.usernameChanged.bind(this);

    }


    render(){
        return(
            <div className="wrapper">
                <Title />
                <p>Please fill in your credentials to login.</p>
                <div>
                    <label>Username</label>
                    <input type="text" autoFocus onChange={this.usernameChanged}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={this.passwordChanged}/>
                </div>
                <p className="error-message"></p>
                <div>
                    <button className="form-button" onClick={this.loginUser}>Login</button>
                </div>
                <p>Don't have an account? <a href="signup">Sign up now</a>.</p>
            </div>
        );
    }

    loginUser = () =>{
        Meteor.loginWithPassword(
            this.state.username,
            this.state.password
        );
    }

    createUser = ()=>{
        Accounts.createUser({
            "username" : this.state.username, 
            "password" : this.state.password
        });
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