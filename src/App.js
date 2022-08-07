// NPM PACKAGE
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// COMPONENT
import UserList from './Components/UsersListing';

/**
 * @returns node
 */
const App = () => {
  // State To Store User Data
  const [userDatas, setUserDatas] = useState([]);

  // useEffect hook using to get data from API
  useEffect(() => {
    axios.get('http://localhost:8000/users').then((res) => {
      setUserDatas(res.data);
    });
  }, []);

  // Jsx
  return (
    // UserList Component
    <div>
      <UserList datas={userDatas} updatingDatas={setUserDatas} />
    </div>
  );
};

// exporting to access the data in another componet by importing there.
export default App;
