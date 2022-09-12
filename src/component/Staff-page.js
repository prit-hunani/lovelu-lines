import React from "react";
import { Link } from "react-router-dom";
import Mapbox from "./GoogleMap";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import amberbaker from '../img/AMBER-BAKER.webp'
import taylorhale from '../img/TAYLOR-HALE.webp'
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
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



  function Staffpage() {
    return ( 
        <div className="services_page" id="services987">
            <div className="container">
                <div className="row loction_w_ourtem">
                    <div className="col-4 loction_winfo">
                        <div className="appiment_booking_leftside">
                            <div className="appoiment_buttons">
                                <h2>Lovely Lines Medical Aesthetics</h2>
                                <Link to="/booking-system-setup-one" className="buttons_sites">Book an Appointment</Link>
                            </div>
                            <div className="text_description mt-4">
                                <p>Look as good as you feel! At Lovely Lines you’ll find unmatched
                                expertise to help you reach your beauty goals. As the leader
                                in non-surgical aesthetics,we’re proud to offer personalized
                                services for each of our clients.</p> 
                            </div>
                            <div className="map_loction_time">
                                <h4><b>Location and hours : </b></h4>
                                <div className="map_loction_dot">
                                    <Mapbox />
                                </div>
                                <div className="map_loction_text">
                                    <div className="map_icon_w_text"><FaMapMarkerAlt />&nbsp;40 West Gay Street, Columbus, OH 43215</div>
                                    <div className="row">
                                        <div className="col-1">
                                            <IoTimeSharp />
                                        </div>
                                        <div className="col-4">
                                            <div className="day_list">
                                                <div>Sunday</div>
                                                <div>Monday</div>
                                                <div>Tuesday</div>
                                                <div style={{color: "#37B10D"}}>Wednesday</div>
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
                                                <div style={{color: "#37B10D"}} >9:00 AM - 5:00 PM</div>
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
                                                <h3 className="star_hadding"><IoStar /> Trustpilot</h3>
                                                <h1>www.lovelylines.com</h1>
                                                <h2>Reviews 577 - Excellent</h2>
                                                <div className="reting_stars">
                                                    <div className="star_line"><div><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></div><div className="reting_point">5.0 <span>&#8520;</span></div></div>
                                                </div>
                                                <div className="viridied_com">
                                                    <AiFillSafetyCertificate /> VERIFIED COMPANY
                                                </div>
                                            </div>
                                            <div className="review_boxs">
                                                <h3 className="star_hadding"><IoStar /> Trustpilot</h3>
                                                <h1>Yelp</h1>
                                                <h2>www.lovelylines.com</h2>
                                                <div className="reting_stars_red">
                                                    <div className="star_line"><div><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></div><div className="reting_point">5.0 <span>&#8520;</span></div></div>
                                                </div>
                                                <div className="viridied_com">
                                                    <AiFillSafetyCertificate /> VERIFIED COMPANY
                                                </div>
                                            </div>
                                            <div className="review_boxs">
                                                <h3 className="star_hadding"><IoStar /> Trustpilot</h3>
                                                <h1>www.lovelylines.com</h1>
                                                <h2>Reviews 577 - Excellent</h2>
                                                <div className="reting_stars">
                                                    <div className="star_line"><div><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></div><div className="reting_point">5.0 <span>&#8520;</span></div></div>
                                                </div>
                                                <div className="viridied_com">
                                                    <AiFillSafetyCertificate /> VERIFIED COMPANY
                                                </div>
                                            </div>
                                            <div className="review_boxs">
                                                <h3 className="star_hadding"><IoStar /> Trustpilot</h3>
                                                <h1>Yelp</h1>
                                                <h2>www.lovelylines.com</h2>
                                                <div className="reting_stars_red">
                                                    <div className="star_line"><div><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></div><div className="reting_point">5.0 <span>&#8520;</span></div></div>
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
                                        <Link to="www.lovelylines.com">www.lovelylines.com</Link>
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
                    </div>    
                    <div className="col-8 only_winfo">
                        <div className="productlists booking_info_right">
                            <h1>Our Team</h1>
                            <div className="bookimg_infoboxs mt-4">
                                <div className="bookinginfo">
                                    <div className="time_line_butone">
                                        <div className="avtar_d_name">
                                            <div><img src={amberbaker} className="sitlogo" alt="sitelogo"  width="100" /></div>
                                            <div>
                                                <h3> Anastasia Parker </h3>
                                                <h5> Family Nurse Practitioner </h5>
                                            </div>
                                        </div>
                                        <div className="time_shows">Anastasia is a board certified Family Nurse Practitioner and Nashville native.
                                            She received her Bachelor’s Degree in Nursing from the University of 
                                            Tennessee and earned her Master’s Degree from Austin Peay State University, where she graduated Magna Cum Laude. She worked in labor and 
                                            delivery before transitioning to dermatology where her love for skin care began. She advocates for sun protection and skin cancer prevention and
                                            is a member of the Dermatology Nurses Association. Anastasia realized she wanted to pursue a career in aesthetics after her personal experience
                                            as a patient receiving treatment for acne scarring. “I found that laser resurfacing and microneedling not only helped minimize my physical imperfections,
                                            but also improved my self-confidence.” Anastasia strives to provide the most effective, individualized treatments that allow clients to experience a positive
                                            outer and inner transformation. She believes that self-care is the most integral part of healthcare and there is no greater reward than helping others achieve
                                            their goals. Anastasia joined Juvly in January of 2019 and is experienced in facial injections, skin resurfacing, laser treatments, buttock enhancements, and
                                            Coolsculpting.
                                        </div>
                                        <div className="time_show">In her spare time, Anastasia enjoys volunteering, attending music and sporting events, and
                                         watching This Is Us with her spoiled lap dog Bentley</div>
                                        <div className="service_list">
                                            <h5>Services</h5>
                                            <h6>Wrinkle Relaxers: Botox, Dysport, Jeuveau</h6>
                                            <h6>Lip Filler</h6>
                                            <h6>Chin Filler</h6>
                                            <h6>Cheek Filler</h6>
                                            <h6>JLyft</h6>
                                            <h6>Kybella for Chin</h6>
                                            <h6>Kybella for Bra Fat</h6>
                                            <h6>Standard Microneedling</h6>
                                            <h6>Microneedling with PRP</h6>
                                            <h6>Genius RF Microneedling</h6>
                                            <h6>PRP for Hair Loss</h6>
                                            <h6>Neurotoxin for Masseter Reduction and Sweating</h6>
                                        </div>
                                        <div className="text-end"><Link to="/" className="buttons_sites_all">Book Appointment</Link></div>
                                    </div>
                                </div>
                                <div className="bookinginfo">
                                    <div className="time_line_butone">
                                        <div className="avtar_d_name">
                                            <div><img src={taylorhale} className="sitlogo" alt="sitelogo"  width="100" /></div>
                                            <div>
                                                <h3> Amber Baker </h3>
                                                <h5> Family Nurse Practitioner </h5>
                                            </div>
                                        </div>
                                        <div className="time_shows">Sarah Jones is a board certified family nurse practitioner with a Plastic Surgery Nursing Certification.
                                            She completed her Master’s of Nursing at The Ohio State University, earned her Bachelor of Science from
                                            the Ohio University, and is an Oncology Nursing Society Member. Sarah emphasizes the value of provider-client relationships.
                                            She believes in listening to clients’ individual goals and formulating a treatment plan together. Sarah knows confidence comes
                                            from feeling and looking your best self. Sarah  is dedicated to assisting clients with the fine details that will make a lasting impact
                                            in the mirror. Go Bucks!
                                        </div>
                                        <div className="service_list">
                                            <h5>Services</h5>
                                            <h6>Wrinkle Relaxers: Botox, Dysport, Jeuveau</h6>
                                            <h6>Lip Filler</h6>
                                            <h6>Chin Filler</h6>
                                            <h6>Cheek Filler</h6>
                                            <h6>JLyft</h6>
                                            <h6>Kybella for Chin</h6>
                                            <h6>Kybella for Bra Fat</h6>
                                            <h6>Standard Microneedling</h6>
                                            <h6>Microneedling with PRP</h6>
                                            <h6>Genius RF Microneedling</h6>
                                            <h6>PRP for Hair Loss</h6>
                                            <h6>Neurotoxin for Masseter Reduction and Sweating</h6>
                                        </div>
                                        <div className="text-end"><Link to="/" className="buttons_sites_all">Book Appointment</Link></div>
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

export default Staffpage;