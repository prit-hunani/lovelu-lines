import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="buy_now_btn">
        <h4>BUY ONE, GET ONE FREE</h4>
        <p>
        The full description of the promotion goes here.
        </p>
        <Button onClick={props.onHide} className="buttons_sites_all">Close</Button>
      </Modal.Body>
    </Modal>
  );
}

function Promotionspop() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="outline-light" onClick={() => setModalShow(true)}>Details</Button>{' '}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Promotionspop;