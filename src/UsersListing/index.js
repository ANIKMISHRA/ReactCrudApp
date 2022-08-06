// NPM Packages
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// React-Bootstrap's Components
import Table from 'react-bootstrap/Table';

// Components
import Nav from '../Navbar';
import DeleteUser from '../ModalButton/DeleteUser/index';

/**
 *
 * @returns node
 */
const UserList = () => {
  const [userDatas, setUserDatas] = useState([]);

  const FetchingUserList = () => {
    axios.get('http://localhost:8000/users').then((res) => {
      setUserDatas(res.data);
    });
  };

  useEffect(() => {
    FetchingUserList();
  }, []);

  return (
    <div>
      <Nav />
      <div className=" position relative mx-3">
        <Table>
          <thead>
            <tr className="bg-light">
              <td>S.NO</td>
              <td>USERS</td>
              <td>CREATED AT</td>
              <td className="text-end mx-4">ACTIONS</td>
            </tr>
          </thead>
          <tbody>
            {userDatas.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.user}</td>
                  <td>{user.date}</td>
                  <td className="text-end">
                    <DeleteUser id={user.id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default UserList;
