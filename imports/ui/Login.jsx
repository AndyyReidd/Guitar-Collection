import React, {Component} from 'react';
import Title from './Title';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
import {Link, Redirect} from 'react-router-dom';
import Navbar from './Navbar';


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
            redirect : false
        }

        this.usernameChanged = this.usernameChanged.bind(this);
        this.passwordChanged = this.passwordChanged.bind(this);
        this.loginUser = this.loginUser.bind(this);

    }

    render(){
        if (this.state.redirect) {
           return <Redirect to='/'/>
        }

        return(
            <div className="wrapper">
                <Title location="Login"/>
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

    loginUser = (e) =>{
        Meteor.loginWithPassword(
            this.state.username,
            this.state.password
        );

    

        if(Meteor.userId()){
            sessionStorage['username'] = Meteor.user().username;
            this.setState({redirect : true});
        }       
    }

    usernameChanged = (e) =>{
        let username = e.target.value;

        this.setState({username : username});
    }

    passwordChanged = (e) => {
        let password = e.target.value;

        this.setState({password : password});
    }
  

}



export default Login;