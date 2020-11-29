import React from 'react';
import './Header.css';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className="Navigation">
            <Navbar style={{ backgroundColor: "#D70F64", height: "70px" }}>

                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
                    <img src={logo} alt="logo" width="80px" />
                </NavbarBrand>
                <Nav className="mr-md-5">
                    <NavItem>
                        <NavLink exact to="/" className="NavLink">Rimi's Burger</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/orders" className="NavLink">Orders</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/login" className="NavLink">login</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>

        </div>
    );
};

export default Header;