// NPM Package
import React, { useState } from 'react';
import axios from 'axios';
// Bootstrap's Components
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// react-icons
import { RiDeleteBin6Line } from 'react-icons/ri';

/**
 * @returns node
 */
const DeleteUser = (props) => {
  // State to decide when to show and not show modal
  const [show, setShow] = useState(false);

  // Function to close the modal
  const handleClose = () => {
    return setShow(false);
  };

  // Function to show the modal
  const handleShow = () => {
    return setShow(true);
  };

  // Destructuring the porps using the props validation
  const { id, datas, updatingDatas } = props || {};

  // This function will be call after clicking on prceed btn to delete the particular user.
  const deleteUserFunc = () => {
    axios.delete(`http://localhost:8000/users/${id}`).then(() => {
      const newUpdatingDatas = datas.filter((user) => {
        return user.id !== id;
      });
      updatingDatas(newUpdatingDatas);
    });
    setShow(false);
  };

  // Jsx
  return (
    // Modal
    <div>
      {/* icon button */}
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
          {/* Title */}
          <Modal.Title>DELETE USER</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure ? You want to Delete the User.</Modal.Body>
        <Modal.Footer>
          {/* Cancel Button */}
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          {/* Proceed Button */}
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

// exporting to access the data in another componet by importing there.
export default DeleteUser;
