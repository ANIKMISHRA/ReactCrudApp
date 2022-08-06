// NPM Package
import React, { useState } from 'react';
import axios from 'axios';
// Bootstrap's Components
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// react-icons
import { RiDeleteBin6Line } from 'react-icons/ri';

/**
 *
 */
const DeleteUser = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    return setShow(false);
  };
  const handleShow = () => {
    return setShow(true);
  };
  const { id } = props || {};
  const deleteUserFunc = () => {
    axios.delete(`http://localhost:8000/users/${id}`);
    setShow(false);
  };
  return (
    <div>
      <Button onClick={handleShow} className="btn btn-light">
        <RiDeleteBin6Line />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>DELETE USER</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure ? You want to Delete the User.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              return deleteUserFunc(id);
            }}
          >
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default DeleteUser;
