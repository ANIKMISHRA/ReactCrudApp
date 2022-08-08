// NPM PACKAGES
import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

// COMPONENTS
import UsersList from './Views/UsersListing';
import UserContext from './Views/ContextApi/UserContext';

import './App.css';

/**
 * @returns node
 */
const App = () => {
  // State To Store Users Data
  const [userDatas, setUserDatas] = useState([]);

  // useEffect hook used to get data from API
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

  return (
    // UserList Component
    <div>
      <UserContext.Provider value={userMemoisedDatas}>
        <UsersList />
      </UserContext.Provider>
    </div>
  );
};

export default App;
