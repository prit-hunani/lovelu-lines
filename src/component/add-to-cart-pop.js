import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

function Addtocart() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
  
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };
  
    return (
      <div ref={ref}>
            <div className="add_to_cart" onClick={handleClick}>
                <FaShoppingCart />
            </div>
        
        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Header>
                <div className="row">
                    <div className="col-6">
                        <h4>Your Cart</h4>
                    </div>
                    <div className="col-6 text-right view_cart">
                    <Link to="/addtocart-page">View Cart</Link>
                    </div>
                </div>
            </Popover.Header>
            <Popover.Body>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                        <td>Partial Face Wrinkle Relaxers-Jeuveau/Dysport/ Botox (1 -2 areas)</td>
                        <td><Link to="/" className="remove_prodect">Remove</Link></td>
                        </tr>
                        <tr>
                        <td>Wrinkle Relaxers for Hyperhidrosis</td>
                        <td><Link to="/" className="remove_prodect">Remove</Link></td>
                        </tr>
                        <tr>
                        <td>Partial Face Wrinkle Relaxers-Jeuveau/Dysport/ Botox (1 -2 areas)</td>
                        <td><Link to="/" className="remove_prodect">Remove</Link></td>
                        </tr>
                    </tbody>
                </Table>
            </Popover.Body>
          </Popover>
        </Overlay>
      </div>
    );
  }
  
  export default Addtocart;