import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import TopHeader from '../TopHeader/TopHeader';


const Navigation = () => {
    const { user } = useAuth();
    let navheight;
    return (
        <div className="header-area">
            <TopHeader page={"frontend"}></TopHeader>

            {user.email ? navheight = '5px' : navheight = ''}
            <Navbar style={{ top: navheight }} className="header-navbar header-top-fixed" collapseOnSelect expand="lg" >

                <Container className="header-container">
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src="https://i.ibb.co/yqjhnxV/travel-agency.png"
                            className="d-inline-block align-top header-logo img-fluid w-50"
                            alt="Zara Clinic"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

                            {!user.email ?
                                <>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                                </>
                                : ""

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>





        </div>
    );
};

export default Navigation;