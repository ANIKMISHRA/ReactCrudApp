// Package
import React from 'react';
// Component Navbar
import Navbar from 'react-bootstrap/Navbar';
// React-icons
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

// Component ModalAddButtonFunc
import ModalAddButtonFunc from '../ModalButtons/AddUser';

/**
 * Navbar     portion
 * @returns node
 */
const Nav = () => {
  // Jsx
  return (
    // Navbar
    <Navbar className="mx-4 sticky-top">
      <Navbar.Brand
        href="/home"
        variant="secondary"
        className="justify-content-end align-middle"
      >
        <span>
          <MdOutlineArrowBackIosNew />
        </span>
        <span style={{ marginLeft: '25px' }}>WEBHOOKS</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          {/* ModalAddButtonFunc Component */}
          <ModalAddButtonFunc />
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

// exporting to access the data in another componet by importing there.
export default Nav;
