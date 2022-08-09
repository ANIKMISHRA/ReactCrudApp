import axios from 'axios';

const addUserFunc = async (userData) => {
  let newUserData;
  await axios.post('http://localhost:8000/users', userData).then((res) => {
    newUserData = res.data;
  });
  return newUserData;
};

export default addUserFunc;
