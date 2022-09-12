import React from "react";
import 'react-multi-carousel/lib/styles.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from "react-router-dom";


function bookingtemplet() {
    return ( 
        <div className="services_page" id="services987">
            <div className="container">
                <div className="row loction_w_ourtem">
                    <div className="col-9 only_winfo">
                        <div className="productlists booking_info_right">
                            <h1 className="back_line">Book an Appointment</h1>
                            <div className="form_setup_loction">
                                <div className="row">
                                    <div className="col back_lines" style={{background: "#68c9cc2e"}}>
                                        <div className="point_number">
                                            <span style={{background: "#68c9cc"}}>1</span>
                                        </div>
                                        <div className="form_name">
                                            <span>Enter Your Information</span>
                                        </div>
                                    </div>
                                    <div className="col back_lines">
                                        <div className="point_number">
                                            <span>2</span>
                                        </div>
                                        <div className="form_name">
                                            <span>Select Service(s)</span>
                                        </div>
                                    </div>
                                    <div className="col back_lines">
                                        <div className="point_number">
                                            <span>3</span>
                                        </div>
                                        <div className="form_name">
                                            <span>Select Provider</span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="point_number">
                                            <span>4</span>
                                        </div>
                                        <div className="form_name">
                                            <span>Select Date & Time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Promotions_infoboxs">
                                <h5 style={{color: "#000"}}>Enter Your Contact Info</h5>
                                <Form>
                                    <Row className="booking_fildes">
                                        <Col>
                                        <Form.Control placeholder="First name" />
                                        </Col>
                                        <Col>
                                        <Form.Control placeholder="Last name" />
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row className="booking_fildes">
                                        <Col>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        </Col>
                                        <Col>
                                            <InputGroup className="mb-3">
                                                <DropdownButton
                                                variant="outline-secondary"
                                                title="91+"
                                                id="input-group-dropdown-1"
                                                >
                                                <Dropdown.Item href="#">91+</Dropdown.Item>
                                                <Dropdown.Item href="#">95+</Dropdown.Item>
                                                <Dropdown.Item href="#">11+</Dropdown.Item>
                                                </DropdownButton>
                                                <Form.Control aria-label="Text input with dropdown button" />
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                    <h6 style={{color: "#000"}}>Your name, email, and phone number will be used to send you appointment
                                        confirmations and reminders. We’ll also be able to call or text you if anything changes.</h6>
                                    <Row>
                                        <Col>
                                        </Col>
                                        <Col className="next_button">
                                            <Link to="/booking-system-verify" className="book_appint_ment">Book an Appointment</Link>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>    
                    </div>
                    <div className="col-3 loction_winfo">
                        <div className="appiment_booking_leftside">
                            <div className="map_loction_time">
                                <h4 style={{color: "#B1B1B1"}}>Location</h4>
                                <Link to="/"><h6 style={{color: "#68c9cc"}}>Downtown Columbus, OH</h6></Link>
                                <h4><b>Services</b></h4>
                                <Link to="/"><h6 style={{color: "#68c9cc"}}>Partial Face Wrinkle Relaxers-Jeuveau/<br/>Dysport/ Botox (1 -2 areas)</h6></Link>
                                <Link to="/"><h6 style={{color: "#68c9cc"}}>Wrinkle Relaxers for Hyperhidrosis</h6></Link>
                                <Link to="/"><h6 style={{color: "#68c9cc"}}>Wrinkle Relaxers for First Time Clients <br/>(Jeuveau, Dysport, Botox)</h6></Link>
                                <h4 style={{color: "#B1B1B1"}}>Provider</h4>
                                <h4 style={{color: "#B1B1B1"}}>Date & Time</h4>
                                <h4 style={{color: "#B1B1B1"}}>Your Info</h4>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        );
    }
    
    export default bookingtemplet;