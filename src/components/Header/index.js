
import React from "react";
import './index.css';
import logo from '../../assets/image/logo.png';
export default function Header () {
    const [topNav, settopNav] = React.useState(false);
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
                    <span id="cart_menu_num" data-action="cart-can" className="badge rounded-circle">5</span>
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