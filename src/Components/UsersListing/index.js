// NPM Packages
import React, { useState } from 'react';
// React-Bootstrap's Components
import Table from 'react-bootstrap/Table';

// Components
import DeleteUser from '../ModalButtons/DeleteUser/index';
import Nav from '../Navbar/index';
/**
 *
 * @returns node
 */
const UserList = (props) => {
  // Destructuring the props using props validation
  const { datas, updatingDatas } = props || {};

  // state to show the limited data.
  const [displayDataLimit, setDisplayDataLimit] = useState(8);

  // using sort method sorting data into descending order
  const sortDatas = datas.sort((a, b) => {
    return a.id < b.id ? 1 : -1;
  });

  // slice method that returns slected elements in an array,as a new array.
  const limitedDatas = sortDatas.slice(0, displayDataLimit);

  // this function will show set data on every click of Load More Button.
  const displayLimitedDataFunc = () => {
    setDisplayDataLimit(displayDataLimit + 8);
  };

  // Jsx
  return (
    <div>
      {/* Navbar Component  */}
      <Nav datas={datas} updatingDatas={updatingDatas} />
      <div className=" position relative mx-3">
        {/* Table */}
        <Table className="fw-light align-middle">
          <thead>
            <tr className="bg-light">
              <td>S.NO</td>
              <td>USERS</td>
              <td>CREATED AT</td>
              <td className="text-end mx-4">ACTIONS</td>
            </tr>
          </thead>
          <tbody>
            {/*  map method to show the listing of users */}
            {limitedDatas.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.user}</td>
                  <td>{user.date}</td>
                  <td className="text-end">
                    {/* DeleteUser Componet */}
                    <DeleteUser
                      id={user.id}
                      datas={datas}
                      updatingDatas={updatingDatas}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {/* Load More Button */}
        <button
          type="button"
          className="btn btn-primary float-end"
          variant="primary"
          onClick={displayLimitedDataFunc}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

// exporting to access the data in another componet by importing there.
export default UserList;
