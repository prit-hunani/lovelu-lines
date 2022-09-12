import React from "react";
import 'react-multi-carousel/lib/styles.css';

import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';


function Bookingtempletfour() {
    return ( 
        <div className="services_page" id="services987">
            <div className="container">
                <div className="row loction_w_ourtem">
                    <div className="col-9 only_winfo">
                        <div className="productlists booking_info_right">
                            <h1 className="back_line">Book an Appointment</h1>
                            <div className="form_setup_loction">
                                <div className="row">
                                    <div className="col back_lines">
                                            <div className="point_number">
                                                <span style={{background: "#68c9cc"}}>1</span>
                                            </div>
                                            <div className="form_name">
                                                <span>Enter Your Information</span>
                                            </div>
                                    </div>
                                    <div className="col back_lines">
                                        <div className="point_number">
                                            <span style={{background: "#68c9cc"}}>2</span>
                                        </div>
                                        <div className="form_name">
                                            <span>Select Service(s)</span>
                                        </div>
                                    </div>
                                    <div className="col back_lines">
                                        <div className="point_number">
                                            <span style={{background: "#68c9cc"}}>3</span>
                                        </div>
                                        <div className="form_name">
                                            <span>Select Provider</span>
                                        </div>
                                    </div>
                                    <div className="col" style={{background: "#68c9cc2e"}}>
                                        <div className="point_number">
                                            <span style={{background: "#68c9cc"}}>4</span>
                                        </div>
                                        <div className="form_name">
                                            <span>Select Date & Time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Promotions_infoboxs">
                                <h5 style={{color: "#000"}}>Please select date & time for your appointment</h5>
                                <div className="row tow_buttones">
                                    <div className="col">
                                    <Form.Group  controlId="formGridEmail">
                                        <Form.Control type="date" placeholder="Enter email" />
                                    </Form.Group>
                                    </div>
                                    <div className="col">
                                    <Form.Group  controlId="formGridEmail">
                                        <Form.Control type="time" placeholder="Enter email" />
                                    </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <div className="priview_next">
                                <div className="row">
                                    <div className="col">
                                        <Link class="buttons_sites_all" to="/booking-system-setup-thrd">&#8249; &nbsp; Previous</Link>
                                    </div>
                                    <div className="col butn_end">
                                        <Link class="buttons_sites_all" to="/booking-system-credit-card">Next &nbsp; &#8250;</Link>
                                    </div>
                                </div>
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
    
    export default Bookingtempletfour;