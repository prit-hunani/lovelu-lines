import React from "react";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import LocationHour from "./Location-hour";

function Membershippage() {
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
              <h1 className="page-tittle">Loyalty Program</h1>
              <div className="Membership_infoboxs mt-4">
                <div className="row">
                  <div className="col">
                    <div className="plans_box">
                      <div className="price_month">
                        <h4>
                          <b>$95 / month</b>
                        </h4>
                        <h5>$50 setup fee</h5>
                      </div>
                      <div className="Membership_name">
                        <h5>
                          <b>Quartz Membership</b>
                        </h5>
                      </div>
                      <div className="diccount_in_membership">
                        <h5>5% off all products</h5>
                      </div>
                      <div className="service_join">
                        <h6>
                          <b>FREE MONTHLY PRODUCTS</b>
                        </h6>
                        <h6>Illuminize chemical peel (1 unit)</h6>
                        <h6>Botox (2 units)</h6>
                        <h6>Cerave Sunscreen Face SPF 50 (3 units)</h6>
                        <h6>CO2 Laser Resurfacing (1 unit)</h6>
                        <h6>Restylane-L (4 units)</h6>
                      </div>
                      <div className="add_to_cart_btn">
                        <Link class="buttons_sites_all" to="/">
                          Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="plans_box">
                      <div className="price_month">
                        <h4>
                          <b>$150 / month</b>
                        </h4>
                        <h5>$50 setup fee</h5>
                      </div>
                      <div className="Membership_name">
                        <h5>
                          <b>Amethyst Membership</b>
                        </h5>
                      </div>
                      <div className="diccount_in_membership">
                        <h5>5% off all products</h5>
                      </div>
                      <div className="service_join">
                        <h6>
                          <b>FREE MONTHLY PRODUCTS</b>
                        </h6>
                        <h6>Illuminize chemical peel (1 unit)</h6>
                        <h6>Botox (2 units)</h6>
                        <h6>Cerave Sunscreen Face SPF 50 (3 units)</h6>
                        <h6>CO2 Laser Resurfacing (1 unit)</h6>
                        <h6>Restylane-L (4 units)</h6>
                      </div>
                      <div className="add_to_cart_btn">
                        <Link class="buttons_sites_all" to="/">
                          Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col">
                    <div className="plans_box">
                      <div className="price_month">
                        <h4>
                          <b>$155 / month</b>
                        </h4>
                        <h5>$50 setup fee</h5>
                      </div>
                      <div className="Membership_name">
                        <h5>
                          <b>Emerald Membership</b>
                        </h5>
                      </div>
                      <div className="diccount_in_membership">
                        <h5>5% off all products</h5>
                      </div>
                      <div className="service_join">
                        <h6>
                          <b>FREE MONTHLY PRODUCTS</b>
                        </h6>
                        <h6>Illuminize chemical peel (1 unit)</h6>
                        <h6>Botox (2 units)</h6>
                        <h6>Cerave Sunscreen Face SPF 50 (3 units)</h6>
                        <h6>CO2 Laser Resurfacing (1 unit)</h6>
                        <h6>Restylane-L (4 units)</h6>
                      </div>
                      <div className="add_to_cart_btn">
                        <Link class="buttons_sites_all" to="/">
                          Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="plans_box">
                      <div className="price_month">
                        <h4>
                          <b>$195 / month</b>
                        </h4>
                        <h5>$50 setup fee</h5>
                      </div>
                      <div className="Membership_name">
                        <h5>
                          <b>Diamond Membership</b>
                        </h5>
                      </div>
                      <div className="diccount_in_membership">
                        <h5>5% off all products</h5>
                      </div>
                      <div className="service_join">
                        <h6>
                          <b>FREE MONTHLY PRODUCTS</b>
                        </h6>
                        <h6>Illuminize chemical peel (1 unit)</h6>
                        <h6>Botox (2 units)</h6>
                        <h6>Cerave Sunscreen Face SPF 50 (3 units)</h6>
                        <h6>CO2 Laser Resurfacing (1 unit)</h6>
                        <h6>Restylane-L (4 units)</h6>
                      </div>
                      <div className="add_to_cart_btn">
                        <Link class="buttons_sites_all" to="/">
                          Add to Cart
                        </Link>
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

export default Membershippage;
