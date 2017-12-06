import React, { Component } from 'react';
import Login from '../login/login';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="top-cover" >
                    <h1 className="top__h1">Lambda Weather</h1>
                </div>
                <Login />
            </div>
        )
    }
}


export default Header;