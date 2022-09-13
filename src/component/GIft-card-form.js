import React from "react";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import wightlogo from "../img/juvlylogo.webp";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sendfuture from "./Send-future-date";
import LocationHour from "./Location-hour";

function Giftcardsform() {
  return (
    <div className="services_page" id="services987">
      <div className="container">
        <div className="row loction_w_ourtem">
          <div className="col-4 loction_winfo">
            <div className="appoiment_buttons">
              <h2>Lovely Lines Medical Aesthetics</h2>
              <Link to="/booking-system-setup-one" className="buttons_sites">
                Book an Appointment
              </Link>
            </div>
            <LocationHour />
          </div>
          <div className="col-8 only_winfo">
            <div className="productlists booking_info_right">
              <h1 className="page-tittle">Gift-card</h1>
              <div className="Promotions_infoboxs">
                <div className="row mt-4">
                  <div className="col">
                    <div className="Promotions_box gcard">
                      <div className="row ">
                        <div className="col-8">
                          <h1>$50</h1>
                          <h6>Happy Birthday</h6>
                        </div>
                        <div className="col-4 gcard">
                          <img
                            src={wightlogo}
                            className="prmotionimg_wight"
                            alt="sitelogo"
                            width="170px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col"></div>
                </div>
                <div className="row">
                  <div className="col-9 gift_form_list">
                    <div className="gift_forms mt-5">
                      <Form>
                        <Form.Group
                          className="mb-4"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Recipient name</Form.Label>
                          <Form.Control type="text" placeholder="Jane Doe" />
                        </Form.Group>
                        <Form.Group
                          className="mb-4"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Recepient email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="jane.doe@domain.com"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-4"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Your name</Form.Label>
                          <Form.Control type="text" placeholder="Jane Doe" />
                        </Form.Group>
                        <Form.Group
                          className="mb-4"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Your email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="jane.doe@domain.com"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-4"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Personal message (optional)</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={6}
                            placeholder="Have a great birthday! Can’t wait to meet again!"
                          />
                        </Form.Group>
                        <Form.Group className="sumbmit-buttones">
                          <Button variant="primary" type="submit">
                            Send Instantly
                          </Button>
                          <Sendfuture />
                        </Form.Group>
                      </Form>
                    </div>
                  </div>
                  <div className="col-3 blanck_col"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Giftcardsform;
