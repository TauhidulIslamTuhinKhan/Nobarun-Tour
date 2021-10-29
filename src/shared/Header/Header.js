import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/brand-logo.png'
import './Header.css'

const Header = () => {
    const {user, signout} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect  expand="lg" bg="light" variant="light" className="header">
                <Container>
                <Navbar.Brand> <Link to="/home"><img className="logo-img" src={logo} alt="" /></Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="header-text" to="/home" activeStyle={{ fontWeight: "bold", color: "red" }}> Home </NavLink>      
                        <NavLink className="header-text" to="/donation" activeStyle={{ fontWeight: "bold", color: "red" }}> Donation </NavLink>      
                        <NavLink className="header-text" to="/events" activeStyle={{ fontWeight: "bold", color: "red" }}>Events </NavLink>      
                        <NavLink className="header-text" to="/blogs" activeStyle={{ fontWeight: "bold", color: "red" }}> Blogs </NavLink>                             
                        <NavLink className="header-text" to="/register" activeStyle={{ fontWeight: "bold", color: "red" }}> Register </NavLink>      
                       {!user?.email? <> <NavLink className="header-text" to="/login" activeStyle={{ fontWeight: "bold", color: "red" }}> Log in </NavLink> </> : 
                       <NavLink onClick={signout} className="header-text" to="/login" activeStyle={{ fontWeight: "bold", color: "red" }}> Log out </NavLink>}
                    </Nav>
                 </Navbar.Collapse>
                </Container>
            </Navbar>   
        </>
    );
};

export default Header;