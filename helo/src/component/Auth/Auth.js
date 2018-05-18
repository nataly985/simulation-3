import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { updateUsername, updateUserId, updateImg} from './reducer';

class Auth extends Component(){
    constructor(){
        super();

        this.state= {
            username:'',
            password:''
        };
    }
    handleUsernameChange(name){
        this.setState( { username: name});
    }
    handlePasswordChange(pass){
        this.setState( { password: pass});
    }
    componentDidMount(){
        axios.get('./api/').then((response) => {
            this.setState( { username:response.data},{password:response.data})
        })
    }
    render(){
        return(
            <div>
            <p>{this.Logout}</p>
            <input onChange={(e) => this.handleUsernameChange(e.target.value)} type="text"/>
            <input onChange={(e) => this.handlePasswordChange(e.target.value)} type="text"/>
            <button onClick={this.handleUsernameChange}>Username</button>
            <button onClick={this.handlePasswordChange}>Password</button>
            </div>
        )  
    }
}
export default connect(null, {updateUsername, updateUserId, updateImg})(Auth);