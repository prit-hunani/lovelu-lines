import React from "react";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import buyongetfree from "../img/buy-on-get-free.webp";
import discountgroup from "../img/discount-group.webp";
import minioackage from "../img/mini-package.webp";
import offerpackage from "../img/offer-package.webp";
import Button from "react-bootstrap/Button";
import Detailspop from "./Promotions-details-pop";
import LocationHour from "./Location-hour";

function Promotionpage() {
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
              <h1 className="page-tittle">Promotions</h1>
              <div className="Promotions_infoboxs">
                <div className="row mt-4">
                  <div className="col">
                    <div className="Promotions_box">
                      <div className="row">
                        <div className="col-4">
                          <img
                            src={buyongetfree}
                            className="prmotionimg"
                            alt="sitelogo"
                            width="160px"
                            height="200px"
                          />
                        </div>
                        <div className="col-8">
                          <h5>SAVE 25% WHEN YOU BUY 3 SYRINGES</h5>
                          <h6>
                            Buy any 2 Restylane Fillers & Save 25% on a 3rd.
                          </h6>
                          <div className="row">
                            <div className="col">
                              <Button variant="light" className="buy_now_btn">
                                Buy Now
                              </Button>{" "}
                            </div>
                            <div className="col">
                              <Detailspop />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="Promotions_box">
                      <div className="row">
                        <div className="col-4">
                          <img
                            src={discountgroup}
                            className="prmotionimg"
                            alt="sitelogo"
                            width="160px"
                            height="200px"
                          />
                        </div>
                        <div className="col-8">
                          <h5>MICRONEEDLING</h5>
                          <h6>
                            Save $50 When You Buy a Series
                            <br /> of 3 Treatments
                          </h6>
                          <div className="row">
                            <div className="col">
                              <Button variant="light" className="buy_now_btn">
                                Buy Now
                              </Button>{" "}
                            </div>
                            <div className="col">
                              <Detailspop />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <div className="Promotions_box">
                      <div className="row">
                        <div className="col-4">
                          <img
                            src={minioackage}
                            className="prmotionimg"
                            alt="sitelogo"
                            width="160px"
                            height="200px"
                          />
                        </div>
                        <div className="col-8">
                          <h5>LIPS & LINES</h5>
                          <h6>
                            Get 10 units of Jeuveau FREE with
                            <br /> any Lip Filler Treatment
                          </h6>
                          <div className="row">
                            <div className="col">
                              <Button variant="light" className="buy_now_btn">
                                Buy Now
                              </Button>{" "}
                            </div>
                            <div className="col">
                              <Detailspop />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="Promotions_box">
                      <div className="row">
                        <div className="col-4">
                          <img
                            src={offerpackage}
                            className="prmotionimg"
                            alt="sitelogo"
                            width="160px"
                            height="200px"
                          />
                        </div>
                        <div className="col-8">
                          <h5>30% OFF TREATMENT</h5>
                          <h6>Emsculpt Special (Emsculpt, Emsculpt Neo)</h6>
                          <div className="row">
                            <div className="col">
                              <Button variant="light" className="buy_now_btn">
                                Buy Now
                              </Button>{" "}
                            </div>
                            <div className="col">
                              <Detailspop />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <div className="Promotions_box">
                      <div className="row">
                        <div className="col diffrantbox">
                          <h4>BUY 60 GET 10 FREE</h4>
                          <h6>Buy 60 Units of Botox & Get 10 Free</h6>
                          <div className="row">
                            <div className="col">
                              <Button variant="light" className="buy_now_btn">
                                Buy Now
                              </Button>{" "}
                              <Detailspop />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="Promotions_box">
                      <div className="row">
                        <div className="col diffrantbox">
                          <h4>20% OFF ALL SUNCARE </h4>
                          <h6>Save on Any SPF Product Through Sept 30th</h6>
                          <div className="row">
                            <div className="col">
                              <Button variant="light" className="buy_now_btn">
                                Buy Now
                              </Button>{" "}
                              <Detailspop />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <div className="Promotions_box">
                      <div className="row">
                        <div className="col diffrantbox">
                          <h4>10% OFF VIRTUE RF </h4>
                          <h6>Save 10% On a Single Virtue RF Treatment</h6>
                          <div className="row">
                            <div className="col">
                              <Button variant="light" className="buy_now_btn">
                                Buy Now
                              </Button>{" "}
                              <Detailspop />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="Promotions_box">
                      <div className="row">
                        <div className="col diffrantbox">
                          <h4>SAVE WITH B12 SHOTS</h4>
                          <h6>Buy 4 & Get the 5th Free</h6>
                          <div className="row">
                            <div className="col">
                              <Button variant="light" className="buy_now_btn">
                                Buy Now
                              </Button>{" "}
                              <Detailspop />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promotionpage;
