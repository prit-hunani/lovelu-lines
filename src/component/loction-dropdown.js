import React from "react";
import Modal from 'react-bootstrap/Modal';
import { FaMapMarkerAlt } from "react-icons/fa";
import sitelogo from '../img/juvlylogo.webp';


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="text-center">
                <img src={sitelogo} className="sitlogo" alt="sitelogo"  width="180" />
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Select a location for one of our clinics!</h6>
          <p>
          <div className="serach-loction">
            <div className="map_icons"><FaMapMarkerAlt /></div>    
            <label>
                <select>
                <option value="Downtown Columbus, OH">Downtown Columbus, OH</option>
                <option value="Polaris">Polaris</option>
                <option value="Cincinnati">Cincinnati</option>
                <option value="Cleveland">Cleveland</option>
                <option value="New York">New York</option>
                <option value="Ft Lauderdale">Ft Lauderdale</option>
                <option value="Chanhassen">Chanhassen</option>
                <option value="Vadnais Heights">Vadnais Heights</option>
                <option value="Eau Claire">Eau Claire</option>
                <option value="Wausau">Wausau</option>
                </select>
            </label>
        </div>
          </p>
        </Modal.Body>
      </Modal>
    );
  }
  
  function Loctiondropdown() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <div className="serach-loction" onClick={() => setModalShow(true)}>
            <div className="map_icon"><FaMapMarkerAlt /></div>    
            <label>
                <select>
                <option value="Downtown Columbus, OH">Downtown Columbus, OH</option>
                <option value="Polaris">Polaris</option>
                <option value="Cincinnati">Cincinnati</option>
                <option value="Cleveland">Cleveland</option>
                <option value="New York">New York</option>
                <option value="Ft Lauderdale">Ft Lauderdale</option>
                <option value="Chanhassen">Chanhassen</option>
                <option value="Vadnais Heights">Vadnais Heights</option>
                <option value="Eau Claire">Eau Claire</option>
                <option value="Wausau">Wausau</option>
                </select>
            </label>
        </div>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
  export default Loctiondropdown;