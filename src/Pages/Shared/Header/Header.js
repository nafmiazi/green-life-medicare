import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import {HashLink} from 'react-router-hash-link';
const Header = () => {
    const {users, logOut} = useAuth();
    return (
        <>
            <Navbar className="nav-bar p-2 ps-0 navigation" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="fw-bold nav-logo" href="#home"><img src={logo} className="me-2" alt=""/><span className="title nav-color">Green Life</span> <span className="title">Medicare</span> <span className="nav-color alt-title">GLM</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} className="nav-color" to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className="nav-color" to="/home#departments">Departments</Nav.Link>
                        <Nav.Link as={Link} className="nav-color" to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={Link} className="nav-color" to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} className="nav-color" to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} className="nav-color hover" to="/news">News</Nav.Link>
                        {users?.email ? 
                            <button onClick={logOut} className="btn btn-warning"><i className="fas fa-sign-out-alt"></i> Logout</button>:
                            <Nav.Link as={Link} className="nav-color" to="/login">
                                <button className="btn btn-primary"><i className="fas fa-sign-in-alt"></i> Login</button>
                            </Nav.Link>
                        }
                        <Navbar.Text className="text-white">
                            <img className="ms-3 w-50 rounded-circle" src={users.photoURL} alt="" />
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;