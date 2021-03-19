import React from 'react';
import './Home.scss'
// import { act } from 'react-dom/test-utils';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import container from '../../Assets/srstore1.png' 
import logo from "../../Assets/srstore2.png"
import * as actionUser from '../../Redux/Actions/UserAction'
// import Login from '../Login/Login';

const Home = () => {
    
    return (<div className="home">

        <div className="navbar">
            <li className="logo"><img src={logo} alt="logo"/></li>
            <li className='search'><input type="text" placeholder="Search you desired product" /><i>Search</i></li>
            <li className="status">
                <span className="user">Login / Register</span>
                
                <span className="cart"> My Cart 0</span>
            </li>
        </div>
        <div className="container">
            <div className="img"><img src={container} alt="container" /></div>
            <div className="about">
                <h2>About us</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum...<span><b style={{cursor:'pointer'}}>Read more</b></span></p>
            </div>
        </div>
        <div className="cat-carosuel">
            <li>Trending</li>
            <li>Footwear</li>
            <li>Clothing</li>
            <li>Electronic</li>
            <li>Fashion</li>
            <li>Grocery</li>
        </div>
        <div className="product">
            <div className="filter">

                <li>Sort by</li>
                <li>Category</li>
            </div>
            <div className="item">
                <div className="line1">
                    <li>Search Results</li>
                    <li>View Type</li>
                </div>
            </div>
        </div>

    </div>)
}
const mapStateToProps = (state) => ({
    test:state.user.test
})
const mapDispatchToProps = (dispatch) => ({
    actionUser:bindActionCreators(actionUser,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps) (Home);