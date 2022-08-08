// NPM Packages
import React, { useState, useContext } from 'react';
import axios from 'axios';

// Bootstrap's Components
import { Button, Modal } from 'react-bootstrap';

// icon
import { RiDeleteBin6Line } from 'react-icons/ri';

// Component
import UserContext from '../ContextApi/UserContext';

/**
 * @returns node
 */
const DeleteUser = (props) => {
  // State to decide when to show and not to show modal
  const [show, setShow] = useState(false);

  // setUserData storing the datails of login user
  const { userDatas, setUserDatas } = useContext(UserContext);

  // Destructuring the porps using the props validation
  const { id } = props || {};

  // Function to close the modal
  const handleClose = () => {
    return setShow(false);
  };

  // Function to show the modal
  const handleShow = () => {
    return setShow(true);
  };

  // This function will be call after clicking on prceed btn to delete the particular user.
  const deleteUserFunc = async () => {
    await axios.delete(`http://localhost:8000/users/${id}`).then(() => {
      const newUpdatingDatas = userDatas.filter((user) => {
        return user.id !== id;
      });
      setUserDatas(newUpdatingDatas);
    });
    setShow(false);
  };

  return (
    <div>
      {/* Delete icon button */}
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
