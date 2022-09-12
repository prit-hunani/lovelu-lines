import React from "react";
import { Link } from "react-router-dom";
import Mapbox from "./GoogleMap";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

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
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 991 },
    items: 1,
  },
  tablettwo: {
    breakpoint: { max: 991, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const responsives = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
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

function Home() {
  return (
    <div className="services_page" id="services987">
      <div className="container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="row site_sec_hadder">
            <div className="col-4">
              <div className="appoiment_buttons">
                <h2>Lovely Lines Medical Aesthetics</h2>
                <Link to="/booking-system-setup-one" className="buttons_sites">
                  Book an Appointment
                </Link>
              </div>
            </div>
            <div className="col-8">
              <div className="slider_in_butn_list">
                <Carousel responsive={responsives}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">
                        Wrinkle Relaxers (Jeuveau, Dysport, Botox)
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        Injectables (Face & Body)
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="three">
                        Wrinkle Relaxers plus Filler
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="four">Microneedling</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="five">
                        Coolsculpting (Call or Chat Online to Book)
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="six">
                        Spa / Aesthetician Services
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Carousel>

                {/* <a harf="#">
                                    <div className="menu_list_cro active" >
                                        Wrinkle Relaxers (Jeuveau, Dysport, Botox)
                                    </div>
                                </a>
                                <Link to="/">   
                                    <div className="menu_list_cro" >
                                        Injectables (Face & Body)
                                    </div>
                                </Link>
                                <Link to="/">
                                    <div className="menu_list_cro">
                                        Wrinkle Relaxers plus Filler
                                    </div>
                                </Link> 
                                <Link to="/">
                                    <div className="menu_list_cro">
                                        Microneedling
                                    </div>
                                </Link>
                                <Link to="/">
                                    <div className="menu_list_cro">
                                        Coolsculpting (Call or  Chat Online to Book)
                                    </div>
                                </Link>
                                <Link to="/">
                                    <div className="menu_list_cro">
                                        Spa / Aesthetician Services
                                    </div>
                                </Link> */}
              </div>
            </div>
          </div>
          <div className="row loction_w_info_section">
            <div className="col-4 loction_winfo">
              <div className="appiment_booking_leftside">
                {/* <div className="appoiment_buttons">
                                <h2>Juvly Medical Aesthetics</h2>
                                <Link to="/" className="buttons_sites">Book an Appointment</Link>
                            </div> */}
                <div className="text_description">
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
              <div className="booking_info_right">
                {/* <div className="slider_in_butn_list">
                                <Carousel responsive={responsives}>
                                    <div className="menu_list_cro active">
                                        Wrinkle Relaxers (Jeuveau, Dysport, Botox)
                                    </div>
                                    <div className="menu_list_cro" >
                                        Injectables (Face & Body)
                                    </div>
                                    <div className="menu_list_cro">
                                        Wrinkle Relaxers plus Filler  
                                    </div>
                                    <div className="menu_list_cro">
                                        Microneedling
                                    </div>
                                    <div className="menu_list_cro">
                                        Coolsculpting (Call or Chat Online to Book)  
                                    </div>
                                    <div className="menu_list_cro">
                                        Spa / Aesthetician Services
                                    </div>
                                </Carousel>  
                            </div> */}
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="bookimg_infoboxs">
                      <div className="bookinginfo">
                        <h3>
                          Partial Face Wrinkle Relaxers-Jeuveau/Dysport/ Botox
                          (1 -2 areas)
                        </h3>
                        <br />
                        <span>
                          Wrinkle relaxers are FDA indicated to last 3-4 months
                          and results from this treatment are seen in 7-10 days.
                          This appointment includes enough time to consult with
                          one of our Master Providers.
                        </span>
                        <br />
                        <br />
                        <span>
                          If you are planning on treating yourself to more than
                          one service on the same day (a very popular option),
                          please see the guidelines below:{" "}
                        </span>
                        <br />
                        <span>
                          1. If you are interested in doing Botox and spa
                          services on the same day, it has to be done in the
                          following order: Chemical
                          peel/Microderm/Dermaplane/Facial/Waxing then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          2. If you are interested in doing Botox, Fillers,
                          Sculptra or Microneedling on the same day, it has to
                          be done in the following order: Filler or Sculptra
                          then Microneedling then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          3. If you are interested in doing Botox and Kybella on
                          the same day: Either Botox or Kybella can be
                          administered first.
                        </span>
                        <div className="time_line_butones">
                          <div className="time_show">
                            <IoTimeSharp />
                            20 minutes
                          </div>
                          <div>
                            <Link to="/" className="buttons_sites_all">
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="bookinginfo">
                        <h3>Wrinkle Relaxers for Hyperhidrosis</h3>
                        <br />
                        <span>
                          Worried about sweaty underarms, hands or feet? Botox,
                          Dysport, or Jeuveau can be used to decrease sweating
                          and is a quick and simple procedure that will help
                          decrease perspiration for up to 6 months.
                        </span>
                        <br />
                        <div className="time_line_butones">
                          <div className="time_show">
                            <IoTimeSharp />
                            30 minutes
                          </div>
                          <div>
                            <Link to="/" className="buttons_sites_all">
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="bookinginfo">
                        <h3>
                          Wrinkle Relaxers for First Time Clients (Jeuveau,
                          Dysport, Botox)
                        </h3>
                        <br />
                        <span>
                          Wrinkle relaxers are FDA indicated to last 3-4 months
                          and results from this treatment are seen in 7-10 days.
                          This appointment includes enough time to consult with
                          one of our Master Providers.
                        </span>
                        <br />
                        <br />
                        <span>
                          If you are planning on treating yourself to more than
                          one service on the same day (a very popular option),
                          please see the guidelines below:{" "}
                        </span>
                        <br />
                        <span>
                          1. If you are interested in doing Botox and spa
                          services on the same day, it has to be done in the
                          following order: Chemical
                          peel/Microderm/Dermaplane/Facial/Waxing then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          2. If you are interested in doing Botox, Fillers,
                          Sculptra or Microneedling on the same day, it has to
                          be done in the following order: Filler or Sculptra
                          then Microneedling then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          3. If you are interested in doing Botox and Kybella on
                          the same day: Either Botox or Kybella can be
                          administered first.
                        </span>
                        <div className="time_line_butones">
                          <div className="time_show">
                            <IoTimeSharp />
                            20 minutes
                          </div>
                          <div>
                            <Link to="/" className="buttons_sites_all">
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="bookimg_infoboxs">
                      <div className="bookinginfo">
                        <h3>Wrinkle Relaxers for Hyperhidrosis</h3>
                        <br />
                        <span>
                          Worried about sweaty underarms, hands or feet? Botox,
                          Dysport, or Jeuveau can be used to decrease sweating
                          and is a quick and simple procedure that will help
                          decrease perspiration for up to 6 months.
                        </span>
                        <br />
                        <div className="time_line_butones">
                          <div className="time_show">
                            <IoTimeSharp />
                            30 minutes
                          </div>
                          <div>
                            <Link to="/" className="buttons_sites_all">
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="bookinginfo">
                        <h3>
                          Wrinkle Relaxers for First Time Clients (Jeuveau,
                          Dysport, Botox)
                        </h3>
                        <br />
                        <span>
                          Wrinkle relaxers are FDA indicated to last 3-4 months
                          and results from this treatment are seen in 7-10 days.
                          This appointment includes enough time to consult with
                          one of our Master Providers.
                        </span>
                        <br />
                        <br />
                        <span>
                          If you are planning on treating yourself to more than
                          one service on the same day (a very popular option),
                          please see the guidelines below:{" "}
                        </span>
                        <br />
                        <span>
                          1. If you are interested in doing Botox and spa
                          services on the same day, it has to be done in the
                          following order: Chemical
                          peel/Microderm/Dermaplane/Facial/Waxing then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          2. If you are interested in doing Botox, Fillers,
                          Sculptra or Microneedling on the same day, it has to
                          be done in the following order: Filler or Sculptra
                          then Microneedling then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          3. If you are interested in doing Botox and Kybella on
                          the same day: Either Botox or Kybella can be
                          administered first.
                        </span>
                        <div className="time_line_butones">
                          <div className="time_show">
                            <IoTimeSharp />
                            20 minutes
                          </div>
                          <div>
                            <Link to="/" className="buttons_sites_all">
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="bookinginfo">
                        <h3>
                          Partial Face Wrinkle Relaxers-Jeuveau/Dysport/ Botox
                          (1 -2 areas)
                        </h3>
                        <br />
                        <span>
                          Wrinkle relaxers are FDA indicated to last 3-4 months
                          and results from this treatment are seen in 7-10 days.
                          This appointment includes enough time to consult with
                          one of our Master Providers.
                        </span>
                        <br />
                        <br />
                        <span>
                          If you are planning on treating yourself to more than
                          one service on the same day (a very popular option),
                          please see the guidelines below:{" "}
                        </span>
                        <br />
                        <span>
                          1. If you are interested in doing Botox and spa
                          services on the same day, it has to be done in the
                          following order: Chemical
                          peel/Microderm/Dermaplane/Facial/Waxing then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          2. If you are interested in doing Botox, Fillers,
                          Sculptra or Microneedling on the same day, it has to
                          be done in the following order: Filler or Sculptra
                          then Microneedling then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          3. If you are interested in doing Botox and Kybella on
                          the same day: Either Botox or Kybella can be
                          administered first.
                        </span>
                        <div className="time_line_butones">
                          <div className="time_show">
                            <IoTimeSharp />
                            20 minutes
                          </div>
                          <div>
                            <Link to="/" className="buttons_sites_all">
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="three">
                    <div className="bookimg_infoboxs">
                      <div className="bookinginfo">
                        <h3>
                          Partial Face Wrinkle Relaxers-Jeuveau/Dysport/ Botox
                          (1 -2 areas)
                        </h3>
                        <br />
                        <span>
                          Wrinkle relaxers are FDA indicated to last 3-4 months
                          and results from this treatment are seen in 7-10 days.
                          This appointment includes enough time to consult with
                          one of our Master Providers.
                        </span>
                        <br />
                        <br />
                        <span>
                          If you are planning on treating yourself to more than
                          one service on the same day (a very popular option),
                          please see the guidelines below:{" "}
                        </span>
                        <br />
                        <span>
                          1. If you are interested in doing Botox and spa
                          services on the same day, it has to be done in the
                          following order: Chemical
                          peel/Microderm/Dermaplane/Facial/Waxing then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          2. If you are interested in doing Botox, Fillers,
                          Sculptra or Microneedling on the same day, it has to
                          be done in the following order: Filler or Sculptra
                          then Microneedling then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          3. If you are interested in doing Botox and Kybella on
                          the same day: Either Botox or Kybella can be
                          administered first.
                        </span>
                        <div className="time_line_butones">
                          <div className="time_show">
                            <IoTimeSharp />
                            20 minutes
                          </div>
                          <div>
                            <Link to="/" className="buttons_sites_all">
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="bookinginfo">
                        <h3>Wrinkle Relaxers for Hyperhidrosis</h3>
                        <br />
                        <span>
                          Worried about sweaty underarms, hands or feet? Botox,
                          Dysport, or Jeuveau can be used to decrease sweating
                          and is a quick and simple procedure that will help
                          decrease perspiration for up to 6 months.
                        </span>
                        <br />
                        <div className="time_line_butones">
                          <div className="time_show">
                            <IoTimeSharp />
                            30 minutes
                          </div>
                          <div>
                            <Link to="/" className="buttons_sites_all">
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="bookinginfo">
                        <h3>
                          Wrinkle Relaxers for First Time Clients (Jeuveau,
                          Dysport, Botox)
                        </h3>
                        <br />
                        <span>
                          Wrinkle relaxers are FDA indicated to last 3-4 months
                          and results from this treatment are seen in 7-10 days.
                          This appointment includes enough time to consult with
                          one of our Master Providers.
                        </span>
                        <br />
                        <br />
                        <span>
                          If you are planning on treating yourself to more than
                          one service on the same day (a very popular option),
                          please see the guidelines below:{" "}
                        </span>
                        <br />
                        <span>
                          1. If you are interested in doing Botox and spa
                          services on the same day, it has to be done in the
                          following order: Chemical
                          peel/Microderm/Dermaplane/Facial/Waxing then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          2. If you are interested in doing Botox, Fillers,
                          Sculptra or Microneedling on the same day, it has to
                          be done in the following order: Filler or Sculptra
                          then Microneedling then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          3. If you are interested in doing Botox and Kybella on
                          the same day: Either Botox or Kybella can be
                          administered first.
                        </span>
                        <div className="time_line_butones">
                          <div className="time_show">
                            <IoTimeSharp />
                            20 minutes
                          </div>
                          <div>
                            <Link to="/" className="buttons_sites_all">
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="four">
                    <div className="bookimg_infoboxs">
                      <div className="bookinginfo">
                        <h3>Wrinkle Relaxers for Hyperhidrosis</h3>
                        <br />
                        <span>
                          Worried about sweaty underarms, hands or feet? Botox,
                          Dysport, or Jeuveau can be used to decrease sweating
                          and is a quick and simple procedure that will help
                          decrease perspiration for up to 6 months.
                        </span>
                        <br />
                        <div className="time_line_butones">
                          <div className="time_show">
                            <IoTimeSharp />
                            30 minutes
                          </div>
                          <div>
                            <Link to="/" className="buttons_sites_all">
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="bookinginfo">
                        <h3>
                          Wrinkle Relaxers for First Time Clients (Jeuveau,
                          Dysport, Botox)
                        </h3>
                        <br />
                        <span>
                          Wrinkle relaxers are FDA indicated to last 3-4 months
                          and results from this treatment are seen in 7-10 days.
                          This appointment includes enough time to consult with
                          one of our Master Providers.
                        </span>
                        <br />
                        <br />
                        <span>
                          If you are planning on treating yourself to more than
                          one service on the same day (a very popular option),
                          please see the guidelines below:{" "}
                        </span>
                        <br />
                        <span>
                          1. If you are interested in doing Botox and spa
                          services on the same day, it has to be done in the
                          following order: Chemical
                          peel/Microderm/Dermaplane/Facial/Waxing then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          2. If you are interested in doing Botox, Fillers,
                          Sculptra or Microneedling on the same day, it has to
                          be done in the following order: Filler or Sculptra
                          then Microneedling then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          3. If you are interested in doing Botox and Kybella on
                          the same day: Either Botox or Kybella can be
                          administered first.
                        </span>
                        <div className="time_line_butones">
                          <div className="time_show">
                            <IoTimeSharp />
                            20 minutes
                          </div>
                          <div>
                            <Link to="/" className="buttons_sites_all">
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="bookinginfo">
                        <h3>
                          Partial Face Wrinkle Relaxers-Jeuveau/Dysport/ Botox
                          (1 -2 areas)
                        </h3>
                        <br />
                        <span>
                          Wrinkle relaxers are FDA indicated to last 3-4 months
                          and results from this treatment are seen in 7-10 days.
                          This appointment includes enough time to consult with
                          one of our Master Providers.
                        </span>
                        <br />
                        <br />
                        <span>
                          If you are planning on treating yourself to more than
                          one service on the same day (a very popular option),
                          please see the guidelines below:{" "}
                        </span>
                        <br />
                        <span>
                          1. If you are interested in doing Botox and spa
                          services on the same day, it has to be done in the
                          following order: Chemical
                          peel/Microderm/Dermaplane/Facial/Waxing then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          2. If you are interested in doing Botox, Fillers,
                          Sculptra or Microneedling on the same day, it has to
                          be done in the following order: Filler or Sculptra
                          then Microneedling then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          3. If you are interested in doing Botox and Kybella on
                          the same day: Either Botox or Kybella can be
                          administered first.
                        </span>
                        <div className="time_line_butones">
                          <div className="time_show">
                            <IoTimeSharp />
                            20 minutes
                          </div>
                          <div>
                            <Link to="/" className="buttons_sites_all">
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="five">
                    <div className="bookimg_infoboxs">
                      <div className="bookinginfo">
                        <h3>
                          Partial Face Wrinkle Relaxers-Jeuveau/Dysport/ Botox
                          (1 -2 areas)
                        </h3>
                        <br />
                        <span>
                          Wrinkle relaxers are FDA indicated to last 3-4 months
                          and results from this treatment are seen in 7-10 days.
                          This appointment includes enough time to consult with
                          one of our Master Providers.
                        </span>
                        <br />
                        <br />
                        <span>
                          If you are planning on treating yourself to more than
                          one service on the same day (a very popular option),
                          please see the guidelines below:{" "}
                        </span>
                        <br />
                        <span>
                          1. If you are interested in doing Botox and spa
                          services on the same day, it has to be done in the
                          following order: Chemical
                          peel/Microderm/Dermaplane/Facial/Waxing then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          2. If you are interested in doing Botox, Fillers,
                          Sculptra or Microneedling on the same day, it has to
                          be done in the following order: Filler or Sculptra
                          then Microneedling then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          3. If you are interested in doing Botox and Kybella on
                          the same day: Either Botox or Kybella can be
                          administered first.
                        </span>
                        <div className="time_line_butones">
                          <div className="time_show">
                            <IoTimeSharp />
                            20 minutes
                          </div>
                          <div>
                            <Link to="/" className="buttons_sites_all">
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="bookinginfo">
                        <h3>Wrinkle Relaxers for Hyperhidrosis</h3>
                        <br />
                        <span>
                          Worried about sweaty underarms, hands or feet? Botox,
                          Dysport, or Jeuveau can be used to decrease sweating
                          and is a quick and simple procedure that will help
                          decrease perspiration for up to 6 months.
                        </span>
                        <br />
                        <div className="time_line_butones">
                          <div className="time_show">
                            <IoTimeSharp />
                            30 minutes
                          </div>
                          <div>
                            <Link to="/" className="buttons_sites_all">
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="bookinginfo">
                        <h3>
                          Wrinkle Relaxers for First Time Clients (Jeuveau,
                          Dysport, Botox)
                        </h3>
                        <br />
                        <span>
                          Wrinkle relaxers are FDA indicated to last 3-4 months
                          and results from this treatment are seen in 7-10 days.
                          This appointment includes enough time to consult with
                          one of our Master Providers.
                        </span>
                        <br />
                        <br />
                        <span>
                          If you are planning on treating yourself to more than
                          one service on the same day (a very popular option),
                          please see the guidelines below:{" "}
                        </span>
                        <br />
                        <span>
                          1. If you are interested in doing Botox and spa
                          services on the same day, it has to be done in the
                          following order: Chemical
                          peel/Microderm/Dermaplane/Facial/Waxing then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          2. If you are interested in doing Botox, Fillers,
                          Sculptra or Microneedling on the same day, it has to
                          be done in the following order: Filler or Sculptra
                          then Microneedling then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          3. If you are interested in doing Botox and Kybella on
                          the same day: Either Botox or Kybella can be
                          administered first.
                        </span>
                        <div className="time_line_butones">
                          <div className="time_show">
                            <IoTimeSharp />
                            20 minutes
                          </div>
                          <div>
                            <Link to="/" className="buttons_sites_all">
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="six">
                    <div className="bookimg_infoboxs">
                      <div className="bookinginfo">
                        <h3>Wrinkle Relaxers for Hyperhidrosis</h3>
                        <br />
                        <span>
                          Worried about sweaty underarms, hands or feet? Botox,
                          Dysport, or Jeuveau can be used to decrease sweating
                          and is a quick and simple procedure that will help
                          decrease perspiration for up to 6 months.
                        </span>
                        <br />
                        <div className="time_line_butones">
                          <div className="time_show">
                            <IoTimeSharp />
                            30 minutes
                          </div>
                          <div>
                            <Link to="/" className="buttons_sites_all">
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="bookinginfo">
                        <h3>
                          Wrinkle Relaxers for First Time Clients (Jeuveau,
                          Dysport, Botox)
                        </h3>
                        <br />
                        <span>
                          Wrinkle relaxers are FDA indicated to last 3-4 months
                          and results from this treatment are seen in 7-10 days.
                          This appointment includes enough time to consult with
                          one of our Master Providers.
                        </span>
                        <br />
                        <br />
                        <span>
                          If you are planning on treating yourself to more than
                          one service on the same day (a very popular option),
                          please see the guidelines below:{" "}
                        </span>
                        <br />
                        <span>
                          1. If you are interested in doing Botox and spa
                          services on the same day, it has to be done in the
                          following order: Chemical
                          peel/Microderm/Dermaplane/Facial/Waxing then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          2. If you are interested in doing Botox, Fillers,
                          Sculptra or Microneedling on the same day, it has to
                          be done in the following order: Filler or Sculptra
                          then Microneedling then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          3. If you are interested in doing Botox and Kybella on
                          the same day: Either Botox or Kybella can be
                          administered first.
                        </span>
                        <div className="time_line_butones">
                          <div className="time_show">
                            <IoTimeSharp />
                            20 minutes
                          </div>
                          <div>
                            <Link to="/" className="buttons_sites_all">
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="bookinginfo">
                        <h3>
                          Partial Face Wrinkle Relaxers-Jeuveau/Dysport/ Botox
                          (1 -2 areas)
                        </h3>
                        <br />
                        <span>
                          Wrinkle relaxers are FDA indicated to last 3-4 months
                          and results from this treatment are seen in 7-10 days.
                          This appointment includes enough time to consult with
                          one of our Master Providers.
                        </span>
                        <br />
                        <br />
                        <span>
                          If you are planning on treating yourself to more than
                          one service on the same day (a very popular option),
                          please see the guidelines below:{" "}
                        </span>
                        <br />
                        <span>
                          1. If you are interested in doing Botox and spa
                          services on the same day, it has to be done in the
                          following order: Chemical
                          peel/Microderm/Dermaplane/Facial/Waxing then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          2. If you are interested in doing Botox, Fillers,
                          Sculptra or Microneedling on the same day, it has to
                          be done in the following order: Filler or Sculptra
                          then Microneedling then Botox.{" "}
                        </span>
                        <br />
                        <span>
                          3. If you are interested in doing Botox and Kybella on
                          the same day: Either Botox or Kybella can be
                          administered first.
                        </span>
                        <div className="time_line_butones">
                          <div className="time_show">
                            <IoTimeSharp />
                            20 minutes
                          </div>
                          <div>
                            <Link to="/" className="buttons_sites_all">
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
}

export default Home;
