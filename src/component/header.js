import React from "react";
import sitelogo from '../img/juvlylogo.webp';
import { Link } from 'react-router-dom';
import Loctionpiker from "./loction-dropdown"
import Addtocarticon from "./add-to-cart-pop";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Siteheader() {
    return (  
        <div className="site_header" id="siteheader987">
            <div className="header_line">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to="/">
                            <img src={sitelogo} className="sitlogo" alt="sitelogo"  width="170" />
                        </Link>
                    </Navbar.Brand>
                    <Nav>
                        
                    </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto topnav">
                    <Loctionpiker />
                        <Link to="/">Services</Link>
                        <Link to="/Staff-page">Staff</Link>
                        <Link to="/Memberships-page">Memberships</Link>
                        <Link to="/Promotions">Promotions</Link>
                        <Link to="/Gift-cards">Gift Cards</Link>
                    </Nav>
                    <Nav className="topnav cart_and_login">
                        <Addtocarticon />
                        <Link eventKey={2} to="/Login-page">
                        Log in
                        </Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                {/* <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <div className="site_logo">
                            <Link to="/">
                                <img src={sitelogo} className="sitlogo" alt="sitelogo"  width="130" />
                            </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <Loctionpiker />
                        </div>
                        <div className="col-5">
                            <div class="topnav">
                                <Link class="active" to="/">Services</Link>
                                <Link to="/Staff-page">Staff</Link>
                                <Link to="/">Memberships</Link>
                                <Link to="/">Promotions</Link>
                            </div>
                        </div>
                        <div className="col-2 card_login">
                            <div className="add_to_cart_icon">
                                <Addtocarticon />
                            </div>
                            <div class="topnav">
                                <Link to="/Login-page">Log in</Link>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
        );
    }
    
export default Siteheader;