
import React from "react";
import './index.css';
import logo from '../../assets/image/logo.png';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
export default function Header () {
    const cantProdut = useSelector(state => state.shopCar.cantProdut)
    return (
        <div>
            <div className="topnav" id="myTopnav">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <div className="cart">
                <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                    <span id="cart_menu_num" data-action="cart-can" className="badge rounded-circle">{cantProdut}</span>
                </div>
            </div>
        </div>
    )
}