import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            email : '',
            password : '',
            confirm : '',
            error : ''
        }

        this.usernameChanged = this.usernameChanged.bind(this);
        this.emailChanged = this.emailChanged.bind(this);
        this.passwordChanged = this.passwordChanged.bind(this);
        this.confirmChanged = this.confirmChanged.bind(this);
        this.createUser = this.createUser.bind(this);
        this.resetFields = this.resetFields.bind(this);
        this.getError = this.getError.bind(this);

    }

    render(){
        return(
            <div className="wrapper">
                <Title />
                <form id="create-user">
                    <p>Create a new account.</p>
                    <div>
                        <label>Username</label>
                        <input type="text" autoFocus={true} onChange={this.usernameChanged}/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" onChange={this.emailChanged}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" onChange={this.passwordChanged}/>
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type="password" onChange={this.confirmChanged}/>
                    </div>
                    <p id="err" className="error-message">{this.state.error}</p>
                    <div>
                        <button className="form-button" onClick={this.createUser}>Create</button>
                        <button className="form-button" onClick={this.resetFields}>Reset</button>
                    </div>
                    <p>Already have an account? <a href="login">Login here</a>.</p>
                </form>
            </div>
        );
    }

    resetFields = (e) =>{
        e.preventDefault();
        document.getElementById("create-user").reset();
        this.setState({
            error : ''
        });
    }

    createUser = (e)=>{
        if(this.state.password == this.state.confirm){
            Accounts.createUser({
                "username" : this.state.username, 
                "email" : this.state.email,
                "password" : this.state.password
            });
       }
       else{
            e.preventDefault();
        }
   
    }

    getError = (message) => {
        return message;
    }

    usernameChanged = (e) =>{
        let username = e.target.value;

        this.setState({
            username : username
        })
    }

    emailChanged = (e) => {
        let email = e.target.value;

        this.setState({
            email : email
        })
    }

    passwordChanged = (e) => {
        let password = e.target.value;

        this.setState({
            password : password
        })
    }

    confirmChanged = (e) => {
        let confirm = e.target.value;

        if (this.state.password !== confirm) {
            console.log("true");
            if (confirm.length > 0) {
                this.setState({
                    error : 'Passwords do not match.'
                });
            }
            else {
                this.setState({
                    error : ''
                });
            }
        }
        else {
            this.setState({
                confirm : confirm, error:''
            })
        }
    }
}

export default Signup;