// NPM Packages
import React, { useState, useContext } from 'react';

// React-Bootstrap's Component
import Table from 'react-bootstrap/Table';

// Components
import DeleteUser from '../DeleteUserModal/index';
import Nav from '../Navbar/index';
import UserContext from '../ContextApi/UserContext';

/**
 * @returns node
 */
const UsersList = () => {
  // state to show the limited data.
  const [displayDataLimit, setDisplayDataLimit] = useState(13);

  // userDatas storing the users datas
  const { userDatas } = useContext(UserContext);

  // using sort method sorting data into descending order
  const sortDatas = userDatas.sort((a, b) => {
    return a.id < b.id ? 1 : -1;
  });

  // slice method that returns slected elements in an array,as a new array.
  const limitedDatas = sortDatas.slice(0, displayDataLimit);

  // this function will show set data on every click of Load More Button.
  const displayLimitedDataFunc = () => {
    setDisplayDataLimit(displayDataLimit + 13);
  };

  return (
    <>
      <div>
        <Nav />
        <div className="">
          <Table className="fw-normal align-middle mt-4">
            <thead>
              <tr className="bg-light">
                <td>S.NO</td>
                <td>USERS</td>
                <td>CREATED AT</td>
                <td className="text-end mx-4">ACTIONS</td>
              </tr>
            </thead>
            <tbody>
              {limitedDatas.map((user, index) => {
                return (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.user}</td>
                    <td>{user.date}</td>
                    <td className="text-end">
                      {/* DeleteUser Componet */}
                      <DeleteUser id={user.id} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="text-center sticky-bottom">
        {/* Load More Button */}
        <button
          type="button"
          className="ldbtn"
          variant="primary"
          onClick={displayLimitedDataFunc}
        >
          LOAD MORE
        </button>
      </div>
    </>
  );
};

export default UsersList;
