// NPM Packages
import React, { useState } from 'react';
import axios from 'axios';
// React-Bootstrap Component
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

/**
 * @param {object} props
 * @returns node
 */
const ModalAddButtonFunc = (props) => {
  // Destructuring props using props validation
  const { datas, updatingDatas } = props || {};

  // State to decide when to show and not show modal
  const [show, setShow] = useState(false);

  // State to to manage the user's Detail
  const [userData, setUserData] = useState({
    user: '',
    date: new Date().toLocaleDateString(),
  });

  // Function to close the modal
  const handleClose = () => {
    return setShow(false);
  };

  // Function to show the modal
  const handleShow = () => {
    setShow(true);
  };

  // This function will handle the user input onChange event.
  const handleUserInput = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  // This function will be call after clicking on add btn to add new user.
  const addUserFunc = () => {
    axios.post('http://localhost:8000/users', userData).then((res) => {
      const addNewUserData = res.data;
      updatingDatas([...datas, addNewUserData]);
    });
    setShow(false);
  };

  // Jsx
  return (
    <div>
      {/* Add New User Button */}
      <Button variant="primary" onClick={handleShow}>
        ADD NEW USER
      </Button>

      {/* Modal */}
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
          {/* Cancel Button */}
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          {/* Add Button */}
          <Button variant="primary" onClick={addUserFunc}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

// exporting to access the data in another componet by importing there.
export default ModalAddButtonFunc;
