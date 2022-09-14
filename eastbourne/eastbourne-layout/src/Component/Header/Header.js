import React from "react";
import "./Header.scss";
import { image } from "../../Config/Image";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav className="navbar">
                    <div className="headerlogo">
                        <a href="/">
                            <img src={image.headerlogo} className="header-image"
                                alt="header-logo" />
                        </a>
                    </div>
                    <div className="nav-links">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul className="menu">
                            <li className="items-css">
                                <NavLink to={'/'} >Home</NavLink>
                            </li>
                            <li className="items-css">
                                <NavLink to={'/experties'} > Our Experties</NavLink>
                            </li>
                            <li className="items-css">
                                <NavLink to={'/About'} >About Us</NavLink>
                            </li>
                            <li className="items-css">
                                <NavLink to={'/Contactus'} >Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div >
        </header >
    )
}

export default Header;
