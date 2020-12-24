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
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

const Header = props => {
    let links = null;
    if (props.token === null) {
        links = (
            <Nav className="mr-md-5">

                <NavItem>
                    <NavLink exact to="/login" className="NavLink">login</NavLink>
                </NavItem>
            </Nav>
        )
    } else {
        links = (
            <Nav className="mr-md-5">
                <NavItem>
                    <NavLink exact to="/" className="NavLink">Rimi's Burger</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink exact to="/orders" className="NavLink">Orders</NavLink>
                </NavItem>

            </Nav>
        )
    }
    return (
        <div className="Navigation">
            <Navbar style={{ backgroundColor: "#D70F64", height: "70px" }}>

                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
                    <img src={logo} alt="logo" width="80px" />
                </NavbarBrand>
                {links}
            </Navbar>

        </div>
    );
};

export default connect(mapStateToProps)(Header);