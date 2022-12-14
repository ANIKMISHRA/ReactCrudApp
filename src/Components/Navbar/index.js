// Package
import React from 'react';
// Component Navbar
import Navbar from 'react-bootstrap/Navbar';
// React-icons
import { FaLessThan } from 'react-icons/fa';

// Component ModalAddButtonFunc
import ModalAddButtonFunc from '../ModalButtons/AddUser';

/**
 * Navbar portion
 * @returns node
 */
const Nav = (props) => {
  // Destructuring the props using props validation
  const { datas, updatingDatas } = props || {};
  // Jsx
  return (
    <Navbar className="mx-4">
      <Navbar.Brand
        href="/home"
        variant="secondary"
        className="justify-content-end align-middle"
      >
        <FaLessThan />
        WEBHOOKS
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          {/* ModalAddButtonFunc Component */}
          <ModalAddButtonFunc datas={datas} updatingDatas={updatingDatas} />
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

// exporting to access the data in another componet by importing there.
export default Nav;
