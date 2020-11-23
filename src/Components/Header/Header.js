import React from 'react';
import './Header.css';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import logo from '../assets/logo.png';
const Header = () => {
    return (
        <div className="Navigation">
            <Navbar style={{ backgroundColor: "#D70F64", height: "70px" }}>

                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
                    <img src={logo} alt="logo" width="80px" />
                </NavbarBrand>
                <Nav className="mr-md-5">
                    <NavItem>
                        <NavLink href="#" className="NavLink">Rimi Burger Shop</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" className="NavLink">Something</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>

        </div>
    );
};

export default Header;