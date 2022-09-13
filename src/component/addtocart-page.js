import React from "react";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import LocationHour from "./Location-hour";

function Cartpage() {
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
              <h1 className="page-tittle">My Cart</h1>
              <div className="productlists bookimg_infoboxs mt-4">
                <div className="productlists bookinginfo">
                  <div className="productlists time_line_butones">
                    <div className="productlists time_show col-8">
                      BUY ONE GET ONE FREE - Buy a Botox product and get one for
                      free!
                    </div>
                    <div className="price_number col-2">$344.00</div>
                    <div>
                      <Link to="/" className="buttons_sites_remove col-2">
                        Remove
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="productlists bookinginfo">
                  <div className="productlists time_line_butones">
                    <div className="productlists time_show col-8">
                      DISCOUNT GROUP - Buy any 5 Fillers and get 2 for free!
                    </div>
                    <div className="price_number col-2">$344.00</div>
                    <div>
                      <Link to="/" className="buttons_sites_remove col-2">
                        Remove
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="productlists bookinginfo">
                  <div className="productlists time_line_butones">
                    <div className="productlists time_show col-8">
                      PACKAGE $20 - Applies for Botox and AlphaRet 2
                    </div>
                    <div className="price_number col-2">$344.00</div>
                    <div>
                      <Link to="/" className="buttons_sites_remove col-2">
                        Remove
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="Continue_Checkout text-right mt-5">
                  <Link to="/" className="buttons_sites">
                    Continue to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartpage;
