// NPM Packages
import React, { useState, useContext } from 'react';

// React-Bootstrap Components
import { Button, Modal } from 'react-bootstrap';

// Component
import UserContext from '../ContextApi/UserContext';
import addUserFunc from '../../Services/Users';

/**
 * @param {object} props
 * @returns node
 */
const ModalAddButtonFunc = () => {
  // State to decide when to show and not show modal
  const [show, setShow] = useState(false);

  // State to to manage the user's Detail
  const [userData, setUserData] = useState({
    user: '',
    date: new Date().toLocaleDateString(),
  });

  // setUserData storing the datails of login user
  const { userDatas, setUserDatas } = useContext(UserContext);

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
  const addNewUserData = async () => {
    const updatedUserData = await addUserFunc(userData);
    setUserDatas([...userDatas, updatedUserData]);
    setShow(false);
  };

  return (
    <div>
      <Button variant="info" onClick={handleShow}>
        ADD NEW USER
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

          <Button variant="primary" onClick={addNewUserData}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalAddButtonFunc;
