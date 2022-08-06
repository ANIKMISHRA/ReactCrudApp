// NPM PACKAGE
import React from 'react';

// COMPONENT
import UserList from './UsersListing';

/**
 * @returns node
 */
const App = () => {
  // Jsx
  return (
    <div>
      <UserList />
    </div>
  );
};

// exporting to access the data in another componet by importing there.
export default App;
