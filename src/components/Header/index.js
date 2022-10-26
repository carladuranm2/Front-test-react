
import React from "react";
import './index.css';
import logo from '../../assets/image/logo.png';
import addshopCar from '../../app/features/shopCar/shopCarSlice';
import { useDispatch, useSelector } from 'react-redux';
export default function Header () {
    const [topNav, settopNav] = React.useState(false);
    const dispatch = useDispatch();
    const cantProdut = useSelector(state => state.shopCar.cantProdut)
    function NavBarMobile () {
        settopNav(!topNav);
    }
    const myClass = topNav ? "topnav" : "topnav responsive";
    return (
        <div>
            <div className={myClass} id="myTopnav">
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
                <a href="/" className="cart">
                    <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                    <span id="cart_menu_num" data-action="cart-can" className="badge rounded-circle">{cantProdut}</span>
                </a>
                {/* <a href="/create" >Details</a> */}
                {/* <a href="/create">More</a> */}
                <a className="icon" onClick={NavBarMobile}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </div>
    )
}