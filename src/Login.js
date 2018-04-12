import React, { Component } from 'react';
import logo from './images/logo_chula.png';
import './css/Login.css';

class Login extends Component {
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(event){
        event.preventDefault();
        console.log('Begin Submit');
        fetch('/login', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body:"username="+this.refs.username.value+"&password="+this.refs.password.value
        })
        .then(res => console.log(res))
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo"/>
                    <h1 className="App-title">Chulalongkorn University</h1>
                </header>
                <div className="App-bottom">
                    <form onSubmit={this.handleLogin}>
                        <div className="App-Username">
                            <input ref="username" className="Username-box" type="text"  placeholder="Student ID" />
                        </div>
                        <div className="App-Password">
                            <input ref="password" className="Password-box"type="Password"  placeholder="Password" />
                        </div>
                        <div className="LoginButton">
                            <button className="LoginButton2" type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
    );
  }
}

export default Login;