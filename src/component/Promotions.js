import React from "react";
import { Link } from "react-router-dom";
import Mapbox from "./GoogleMap";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import buyongetfree from "../img/buy-on-get-free.webp";
import discountgroup from "../img/discount-group.webp";
import minioackage from "../img/mini-package.webp";
import offerpackage from "../img/offer-package.webp";
import Button from "react-bootstrap/Button";
import Detailspop from "./Promotions-details-pop";
import { AiFillSafetyCertificate } from "react-icons/ai";

function Mailto({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {props.children}
    </a>
  );
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Promotionpage() {
  return (
    <div className="services_page" id="services987">
      <div className="container">
        <div className="row loction_w_ourtem">
          <div className="col-4 loction_winfo">
            <div className="appiment_booking_leftside">
              <div className="appoiment_buttons">
                <h2>Lovely Lines Medical Aesthetics</h2>
                <Link to="/booking-system-setup-one" className="buttons_sites">
                  Book an Appointment
                </Link>
              </div>
              <div className="text_description mt-4">
                <p>
                  Look as good as you feel! At Lovely Lines you’ll find
                  unmatched expertise to help you reach your beauty goals. As
                  the leader in non-surgical aesthetics,we’re proud to offer
                  personalized services for each of our clients.
                </p>
              </div>
              <div className="map_loction_time">
                <h4>
                  <b>Location and hours : </b>
                </h4>
                <div className="map_loction_dot">
                  <Mapbox />
                </div>
                <div className="map_loction_text">
                  <div className="map_icon_w_text">
                    <FaMapMarkerAlt />
                    &nbsp;40 West Gay Street, Columbus, OH 43215
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <IoTimeSharp />
                    </div>
                    <div className="col-4">
                      <div className="day_list">
                        <div>Sunday</div>
                        <div>Monday</div>
                        <div>Tuesday</div>
                        <div style={{ color: "#37B10D" }}>Wednesday</div>
                        <div>Thursday</div>
                        <div>Friday</div>
                        <div>Saturday</div>
                      </div>
                    </div>
                    <div className="col-7">
                      <div className="time_list">
                        <div>Closed</div>
                        <div>9:00 AM - 5:00 PM</div>
                        <div>9:00 AM - 5:00 PM</div>
                        <div style={{ color: "#37B10D" }}>
                          9:00 AM - 5:00 PM
                        </div>
                        <div>9:00 AM - 5:00 PM</div>
                        <div>9:00 AM - 5:00 PM</div>
                        <div>9:00 AM - 5:00 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="review_slider">
                <Carousel responsive={responsive}>
                  <div className="review_boxs">
                    <h3 className="star_hadding">
                      <IoStar /> Trustpilot
                    </h3>
                    <h1>www.lovelylines.com</h1>
                    <h2>Reviews 577 - Excellent</h2>
                    <div className="reting_stars">
                      <div className="star_line">
                        <div>
                          <IoStar />
                          <IoStar />
                          <IoStar />
                          <IoStar />
                          <IoStar />
                        </div>
                        <div className="reting_point">
                          5.0 <span>&#8520;</span>
                        </div>
                      </div>
                    </div>
                    <div className="viridied_com">
                      <AiFillSafetyCertificate /> VERIFIED COMPANY
                    </div>
                  </div>
                  <div className="review_boxs">
                    <h3 className="star_hadding">
                      <IoStar /> Trustpilot
                    </h3>
                    <h1>Yelp</h1>
                    <h2>www.lovelylines.com</h2>
                    <div className="reting_stars_red">
                      <div className="star_line">
                        <div>
                          <IoStar />
                          <IoStar />
                          <IoStar />
                          <IoStar />
                          <IoStar />
                        </div>
                        <div className="reting_point">
                          5.0 <span>&#8520;</span>
                        </div>
                      </div>
                    </div>
                    <div className="viridied_com">
                      <AiFillSafetyCertificate /> VERIFIED COMPANY
                    </div>
                  </div>
                  <div className="review_boxs">
                    <h3 className="star_hadding">
                      <IoStar /> Trustpilot
                    </h3>
                    <h1>www.lovelylines.com</h1>
                    <h2>Reviews 577 - Excellent</h2>
                    <div className="reting_stars">
                      <div className="star_line">
                        <div>
                          <IoStar />
                          <IoStar />
                          <IoStar />
                          <IoStar />
                          <IoStar />
                        </div>
                        <div className="reting_point">
                          5.0 <span>&#8520;</span>
                        </div>
                      </div>
                    </div>
                    <div className="viridied_com">
                      <AiFillSafetyCertificate /> VERIFIED COMPANY
                    </div>
                  </div>
                  <div className="review_boxs">
                    <h3 className="star_hadding">
                      <IoStar /> Trustpilot
                    </h3>
                    <h1>Yelp</h1>
                    <h2>www.lovelylines.com</h2>
                    <div className="reting_stars_red">
                      <div className="star_line">
                        <div>
                          <IoStar />
                          <IoStar />
                          <IoStar />
                          <IoStar />
                          <IoStar />
                        </div>
                        <div className="reting_point">
                          5.0 <span>&#8520;</span>
                        </div>
                      </div>
                    </div>
                    <div className="viridied_com">
                      <AiFillSafetyCertificate /> VERIFIED COMPANY
                    </div>
                  </div>
                </Carousel>
              </div>
              <div className="icon_w_prinfo">
                <div className="prinfo_icon_text">
                  <div className="bwoswe">
                    <TbWorld />
                  </div>
                  <div className="web_name">
                    <a href="https://www.lovelylines.com/">
                      www.lovelylines.com
                    </a>
                  </div>
                </div>
                <div className="prinfo_icon_text">
                  <div className="bwoswe">
                    <IoMail />
                  </div>
                  <div className="web_name">
                    <Mailto
                      email="info@lovelylines.com"
                      subject="lovely"
                      body="lovely"
                    >
                      info@lovelylines.com
                    </Mailto>
                  </div>
                </div>
                <div className="prinfo_icon_text">
                  <div className="bwoswe">
                    <IoCall />
                  </div>
                  <div className="web_name">
                    <a href="tel:(800) 234 3388">(800) 234 3388</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8 only_winfo">
            <div className="productlists booking_info_right">
              <h1>Promotions</h1>
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
