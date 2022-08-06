import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalAddButtonFunc = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    return setShow(false);
  };
  const [userData, setUserData] = useState({
    user: '',
    date: '05 August 2022',
  });

  const handleShow = () => {
    setShow(true);
  };
  const handleUserInput = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  const addUserFunc = () => {
    axios.post('http://localhost:8000/users', userData).then(() => {});

    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        ADD USER
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADDING USER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className="form-control"
            type="text"
            name="user"
            onChange={handleUserInput}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addUserFunc}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddButtonFunc;
