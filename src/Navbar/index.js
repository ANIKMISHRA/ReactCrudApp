// Package
import React from 'react';
// Component Navbar
import Navbar from 'react-bootstrap/Navbar';
// Component ModalAddButtonFunc
import { FaLessThan } from 'react-icons/fa';

import ModalAddButtonFunc from '../ModalButton/AddUser/index';
// React-icons

/**
 * Navbar portion
 * @returns node
 */
const Nav = () => {
  // Jsx
  return (
    <Navbar className="mx-4">
      <Navbar.Brand href="/home" variant="secondary">
        <FaLessThan />
        WEBHOOKS
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <ModalAddButtonFunc />
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

// exporting to access the data in another componet by importing there.
export default Nav;
