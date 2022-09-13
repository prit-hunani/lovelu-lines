import React from "react";
import { Link } from "react-router-dom";
import { IoTimeSharp } from "react-icons/io5";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import LocationHour from "../component/Location-hour";

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
              </div>
            </div>
          </div>
          <div className="row loction_w_info_section">
            <div className="col-4 loction_winfo">
              <LocationHour />
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
