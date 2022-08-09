// NPM Package
import React from 'react';

// React Bootstrap Component
import Navbar from 'react-bootstrap/Navbar';

// icon
import { IoIosArrowBack } from 'react-icons/io';

// Component
import ModalAddButtonFunc from '../AddUserModal';

/**
 * Navbar portion
 * @returns node
 */
const Nav = () => {
  return (
    <div className="nav-div sticky-top">
      <Navbar className="mx-4 sticky-top align-middle ">
        <Navbar.Brand
          href="/home"
          variant="secondary"
          className="justify-content-end align-middle"
        >
          <div className="fs-4 nav-title">
            {/* Arrow icon button */}
            <span>
              <IoIosArrowBack />
            </span>

            <span style={{ marginLeft: '10px' }} className="">
              WEBHOOKS
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {/* ModalAddButtonFunc Component */}
            <ModalAddButtonFunc />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <hr className=" hr-1 " />
    </div>
  );
};

export default Nav;
