import React, { Component } from 'react';
import './login.css';

class Login extends Component {

    render() {
        return (
            <div className="wrapper">
                <form>
                    <input type="text" className="field-input"/>
                    <input type="button" value="sign in" className="button"/>
                    <input type="button" value="sign up" className="button"/>
                </form>
            </div>
        )
    }
}

export default Login;

