import React from 'react';
import logo from '../../Assets/srstore1.png'
// import { Link } from 'react-router-dom';
import './Login.scss'
const Login = () => {
    return (<div className="login">
        
        <form>
            <div className="logo"><img src={logo} alt="logo" /></div>
            <div>
            <h2>LOGIN</h2>
        </div>
            <div
            >
                <input type="email" placeholder=" Email" />
            </div>
            <div>
                <input type="password" placeholder="Password" />
            </div>
            
            <button className="button">LOGIN</button>
            <p className="registeration">Click here for Registration</p>
        </form>
    </div>)
}
export default Login;