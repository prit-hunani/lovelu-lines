import { AiFillSafetyCertificate } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import Mapbox from "./GoogleMap";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import Carousel from "react-multi-carousel";
import { IoTimeSharp } from "react-icons/io5";
import "react-multi-carousel/lib/styles.css";
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
function LocationHour() {
  return (
    <div className="appiment_booking_leftside">
      {/* <div className="appoiment_buttons">
                        <h2>Juvly Medical Aesthetics</h2>
                        <Link to="/" className="buttons_sites">Book an Appointment</Link>
                    </div> */}
      <div className="text_description">
        <p>
          Look as good as you feel! At Lovely Lines you’ll find unmatched
          expertise to help you reach your beauty goals. As the leader in
          non-surgical aesthetics,we’re proud to offer personalized services for
          each of our clients.
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
                <div style={{ color: "#37B10D" }}>9:00 AM - 5:00 PM</div>
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
            <a href="https://www.lovelylines.com/">www.lovelylines.com</a>
          </div>
        </div>
        <div className="prinfo_icon_text">
          <div className="bwoswe">
            <IoMail />
          </div>
          <div className="web_name">
            <Mailto email="info@lovelylines.com" subject="lovely" body="lovely">
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
  );
}

export default LocationHour;
