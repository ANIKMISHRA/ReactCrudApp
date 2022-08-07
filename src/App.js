// NPM PACKAGE
import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

// COMPONENT
import UserList from './Components/UsersListing';
import UserContext from './Components/ContextApi/UserContext';

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

  // useMemo hook stop the rerendring again and again
  const userMemoisedDatas = useMemo(() => {
    return {
      userDatas,
      setUserDatas,
    };
  });

  // Jsx
  return (
    // UserList Component
    <div>
      <UserContext.Provider value={userMemoisedDatas}>
        <UserList />
      </UserContext.Provider>
    </div>
  );
};

// exporting to access the data in another componet by importing there.
export default App;
