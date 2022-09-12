import React from "react";
import loginleftimg from '../img/loginimg.webp';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { useEffect } from 'react'
import sitelogo from '../img/juvlylogo.webp';


function Loginpage() {
    useEffect(() => {
        document.body.classList.add('product-layout')
        return () => {
          document.body.classList.remove('product-layout')
        }
      }, [])
    return ( 
        <div className="login_page" id="login965">
            <div className="site_header" id="siteheader987" style={{display: "none"}}>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-7 mobhilimgs">
                        <div className="left_site_mobhilimg">
                        <img src={loginleftimg} className="loginfom" alt="sitelogo"  width="100%" />
                        </div>
                    </div>
                    <div className="col-4 loginparts">
                        <div className="logon_form">
                            <div className="sitelogo_hadding">
                                <img src={sitelogo} className="loginfom" alt="sitelogo"  width="200px" />
                                <h5>Welcome to our Patient Portal</h5>
                                <h6>If you are an Existing Patient, please sign in below. If you are new to our practice, please complete the New Patient Registration to activate your Patient Portal.</h6>
                            </div>
                            <div className="add_login_dt">    
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Row>
                                            <Col>
                                                <Form.Check type="checkbox" label="Remember Me" />
                                            </Col>
                                            <Col className="text-right forgetpass">
                                                <Link to="/">Forget Password !</Link>
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                    <Link variant="primary" className="login-btns" type="submit" to="/">
                                        Login
                                    </Link>
                                    <br/>
                                    <br/>
                                    <Link variant="outline-primary" className="login-btn" to="/">
                                    New Patient Registration
                                    </Link>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="col-1 westaguse">
                   
                    </div>
                </div>
            </div>
        </div>
        );
    }
    
export default Loginpage;