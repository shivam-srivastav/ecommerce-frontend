import React, { useState,useEffect } from 'react';
import './Register.scss'
import img from "./../../Assets/register.svg"
import logo from './../../Assets/srstore1.png'
import { Link } from 'react-router-dom';
// import {Button} from 'semantic-ui-react'
const Register = () => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }
    return (<div className="register">
        <div className="register-head">
            <h1>Registration </h1>
        </div>
        <div style={{display:'flex', justifyContent:"center"}}>
        <Link to='/home'>                                                    <img style={{width:'11rem',margin:'2rem'}} src={logo} alt="logo"/>
</Link>
        </div>
        <div className="register-wrapper">

        <div className="img">
            <img src={img}alt="img"/>
        </div>
            <div className="register-form">
                <div className="logo" style={{display:"flex", alignItems:"center"}}>
                    <h2>Join us here,</h2>
                </div>
            <p>
                Please fill the nessary information to get register
            </p>
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
                <li>Select Type </li>
                <div className="select-role">
                <input type="radio" value="1" name="role"/> Seller
                <input type="radio" value="1" name="role"/> User
                </div>
                <div className="img-upload">
                <input type="file" onChange={onSelectFile} />
                {selectedFile && <span><img src={preview} sizes="5rem" alt="preview"/></span>}
                </div>
                <div style={{margin:' 0rem 2rem'}}><p><b>Already Registered? Login here</b></p></div>
            <button>Create New Account</button>
        </div>
    </div>
    </div>)
}
export default Register;