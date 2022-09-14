import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoTimeSharp } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>The service has a deposit!</h4>
        <p>
          This service requires a desposit of $1.00 to book. Your deposit will
          be applied at the time of treatment. Please click continue to proceed.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="buttons_sites_all">
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

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
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Bookingtinperson() {
  const [modalShow, setModalShow] = React.useState(false);
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
                      <span style={{ background: "#68c9cc" }}>1</span>
                    </div>
                    <div className="form_name">
                      <span>Enter Your Information</span>
                    </div>
                  </div>
                  <div
                    className="col back_lines"
                    style={{ background: "#68c9cc2e" }}
                  >
                    <div className="point_number">
                      <span style={{ background: "#68c9cc" }}>2</span>
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
                <h5 style={{ color: "#000" }}>
                  What type of appointment do you want to book?
                </h5>
                <div className="row tow_buttones">
                  <div className="col-4">
                    <Link
                      variant="outline-primary"
                      className="choicsbtn"
                      to="/booking-inperson"
                    >
                      In Person
                    </Link>{" "}
                  </div>
                  <div className="col-4">
                    <Link
                      variant="outline-primary"
                      className="choicsbtn"
                      to="/booking-system-setup-thrd"
                    >
                      Virtual
                    </Link>{" "}
                  </div>
                  <div className="col-4"></div>
                </div>
                <div className="Promotions_infoboxs">
                  <h5 style={{ color: "#000" }}>Please select one provider.</h5>
                  <div className="slider_in_butn_list mt-3 mb-3">
                    <Carousel responsive={responsives}>
                      <div className="menu_list_cro active">
                        Wrinkle Relaxers (Jeuveau, Dysport, Botox)
                      </div>
                      <div className="menu_list_cro">
                        Injectables (Face & Body)
                      </div>
                      <div className="menu_list_cro">
                        Wrinkle Relaxers plus Filler
                      </div>
                      <div className="menu_list_cro">Microneedling</div>
                      <div className="menu_list_cro">
                        Coolsculpting (Call or Chat Online to Book)
                      </div>
                      <div className="menu_list_cro">
                        Spa / Aesthetician Services
                      </div>
                    </Carousel>
                  </div>
                  <div className="row thrd_boxes">
                    <div className="col">
                      <div
                        className="provider_name_info"
                        onClick={() => setModalShow(true)}
                      >
                        <div className="provider_icon_name">
                          <div className="provider_dps">
                            <h5 style={{ color: "#525252" }}>
                              Partial Face Wrinkle Relaxers-Jeuveau/Dysport/
                              Botox (1 -2 areas)
                            </h5>
                          </div>
                        </div>
                        <div className="provider">
                          <h6>
                            Wrinkle relaxers are FDA indicated to last 3-4
                            months and results from this treatment are see....
                            <Link to="" style={{ color: "#68C9CC" }}>
                              Read more
                            </Link>
                          </h6>
                        </div>
                        <div className="time_show">
                          <IoTimeSharp />
                          20 minutes
                        </div>
                      </div>
                      <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </div>
                    <div className="col">
                      <div className="provider_name_info">
                        <div className="provider_icon_name">
                          <div className="provider_dps">
                            <h5 style={{ color: "#525252" }}>
                              Wrinkle Relaxers for Hyperhidrosis
                            </h5>
                          </div>
                        </div>
                        <div className="provider">
                          <h6>
                            Wrinkle relaxers are FDA indicated to last 3-4
                            months and results from this treatment are see....
                            <Link to="" style={{ color: "#68C9CC" }}>
                              Read more
                            </Link>
                          </h6>
                        </div>
                        <div className="time_show">
                          <IoTimeSharp />
                          20 minutes
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="provider_name_info">
                        <div className="provider_icon_name">
                          <div className="provider_dps">
                            <h5 style={{ color: "#525252" }}>
                              Wrinkle Relaxers for Hyperhidrosis
                            </h5>
                          </div>
                        </div>
                        <div className="provider">
                          <h6>
                            Wrinkle relaxers are FDA indicated to last 3-4
                            months and results from this treatment are see....
                            <Link to="" style={{ color: "#68C9CC" }}>
                              Read more
                            </Link>
                          </h6>
                        </div>
                        <div className="time_show">
                          <IoTimeSharp />
                          20 minutes
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row thrd_boxes">
                    <div className="col">
                      <div className="provider_name_info">
                        <div className="provider_icon_name">
                          <div className="provider_dps">
                            <h5 style={{ color: "#525252" }}>
                              Wrinkle Relaxers for Hyperhidrosis
                            </h5>
                          </div>
                        </div>
                        <div className="provider">
                          <h6>
                            Wrinkle relaxers are FDA indicated to last 3-4
                            months and results from this treatment are see....
                            <Link to="" style={{ color: "#68C9CC" }}>
                              Read more
                            </Link>
                          </h6>
                        </div>
                        <div className="time_show">
                          <IoTimeSharp />
                          20 minutes
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="provider_name_info">
                        <div className="provider_icon_name">
                          <div className="provider_dps">
                            <h5 style={{ color: "#525252" }}>
                              Wrinkle Relaxers for Hyperhidrosis
                            </h5>
                          </div>
                        </div>
                        <div className="provider">
                          <h6>
                            Wrinkle relaxers are FDA indicated to last 3-4
                            months and results from this treatment are see....
                            <Link to="" style={{ color: "#68C9CC" }}>
                              Read more
                            </Link>
                          </h6>
                        </div>
                        <div className="time_show">
                          <IoTimeSharp />
                          20 minutes
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="provider_name_info">
                        <div className="provider_icon_name">
                          <div className="provider_dps">
                            <h5 style={{ color: "#525252" }}>
                              Wrinkle Relaxers for Hyperhidrosis
                            </h5>
                          </div>
                        </div>
                        <div className="provider">
                          <h6>
                            Wrinkle relaxers are FDA indicated to last 3-4
                            months and results from this treatment are see....
                            <Link to="" style={{ color: "#68C9CC" }}>
                              Read more
                            </Link>
                          </h6>
                        </div>
                        <div className="time_show">
                          <IoTimeSharp />
                          20 minutes
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="priview_next">
                <div className="row">
                  <div className="col">
                    <Link
                      class="buttons_sites_all"
                      to="/booking-system-setup-one"
                    >
                      &#8249; &nbsp; Previous
                    </Link>
                  </div>
                  <div className="col butn_end">
                    <Link
                      class="buttons_sites_all"
                      to="/booking-system-setup-thrd"
                    >
                      Next &nbsp; &#8250;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 loction_winfo">
            <div className="appiment_booking_leftside">
              <div className="map_loction_time">
                <h4 style={{ color: "#B1B1B1" }}>Location</h4>
                <Link to="/">
                  <h6 style={{ color: "#68c9cc" }}>Downtown Columbus, OH</h6>
                </Link>
                <h4>
                  <b>Services</b>
                </h4>
                <Link to="/">
                  <h6 style={{ color: "#68c9cc" }}>
                    Partial Face Wrinkle Relaxers-Jeuveau/
                    <br />
                    Dysport/ Botox (1 -2 areas)
                  </h6>
                </Link>
                <Link to="/">
                  <h6 style={{ color: "#68c9cc" }}>
                    Wrinkle Relaxers for Hyperhidrosis
                  </h6>
                </Link>
                <Link to="/">
                  <h6 style={{ color: "#68c9cc" }}>
                    Wrinkle Relaxers for First Time Clients <br />
                    (Jeuveau, Dysport, Botox)
                  </h6>
                </Link>
                <h4 style={{ color: "#B1B1B1" }}>Provider</h4>
                <h4 style={{ color: "#B1B1B1" }}>Date & Time</h4>
                <h4 style={{ color: "#B1B1B1" }}>Your Info</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookingtinperson;
