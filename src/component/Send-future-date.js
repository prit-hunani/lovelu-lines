
import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Form from 'react-bootstrap/Form';


function Giftcardsformdate() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button variant="primary" ref={target} onClick={() => setShow(!show)}>
        Click me to see
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              
              ...props.style,
            }}
          > 
            <Form className='datepickerlist'>
                <Form.Group controlId="formGridEmail">
                    <Form.Control type="time" placeholder="Enter email" size="lg"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form>
          </div>
        )}
      </Overlay>
    </>
  );
}

export default Giftcardsformdate;