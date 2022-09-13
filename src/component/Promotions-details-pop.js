import React from "react";
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
      <div>
        <Modal.Body className="buy_now_btn">
          <h4 className="off-txt">BUY ONE, GET ONE FREE</h4>
          <p className="off-subtxt">
            The full description of the promotion goes here.
          </p>
          <div className="off-btn">
            <Button onClick={props.onHide} className="buttons_sites_all">
              Close
            </Button>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
}

function Promotionspop() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="outline-light" onClick={() => setModalShow(true)}>
        Details
      </Button>{" "}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Promotionspop;
