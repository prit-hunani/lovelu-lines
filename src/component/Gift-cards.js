import React from "react";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import wightlogo from "../img/juvlylogo.webp";
import LocationHour from "./Location-hour";

function Giftcards() {
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
                    <Link to="/Gift-card-form">
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
                              width="170"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col">
                    <div className="Promotions_box gcard">
                      <div className="row ">
                        <div className="col-8">
                          <h1>$1000</h1>
                          <h6>Mother’s Day</h6>
                        </div>
                        <div className="col-4 gcard">
                          <img
                            src={wightlogo}
                            className="prmotionimg_wight"
                            alt="sitelogo"
                            width="170"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <div className="Promotions_box gcard">
                      <div className="row ">
                        <div className="col-8">
                          <h1>$50</h1>
                          <h6>Black Friday</h6>
                        </div>
                        <div className="col-4 gcard">
                          <img
                            src={wightlogo}
                            className="prmotionimg_wight"
                            alt="sitelogo"
                            width="170"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="Promotions_box gcard">
                      <div className="row ">
                        <div className="col-8">
                          <h1>$1000</h1>
                          <h6>Donation Gift Card</h6>
                        </div>
                        <div className="col-4 gcard">
                          <img
                            src={wightlogo}
                            className="prmotionimg_wight"
                            alt="sitelogo"
                            width="170"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                            width="170"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="Promotions_box gcard">
                      <div className="row ">
                        <div className="col-8">
                          <h1>$1000</h1>
                          <h6>Mother’s Day</h6>
                        </div>
                        <div className="col-4 gcard">
                          <img
                            src={wightlogo}
                            className="prmotionimg_wight"
                            alt="sitelogo"
                            width="170"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <div className="Promotions_box gcard">
                      <div className="row ">
                        <div className="col-8">
                          <h1>$50</h1>
                          <h6>Black Friday</h6>
                        </div>
                        <div className="col-4 gcard">
                          <img
                            src={wightlogo}
                            className="prmotionimg_wight"
                            alt="sitelogo"
                            width="170"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="Promotions_box gcard">
                      <div className="row ">
                        <div className="col-8">
                          <h1>$1000</h1>
                          <h6>Donation Gift Card</h6>
                        </div>
                        <div className="col-4 gcard">
                          <img
                            src={wightlogo}
                            className="prmotionimg_wight"
                            alt="sitelogo"
                            width="170"
                          />
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

export default Giftcards;
