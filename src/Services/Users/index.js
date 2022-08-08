import axios from 'axios';

const addUserFunc = async (userData) => {
  await axios.post('http://localhost:8000/users', userData).then(() => {});
};

export default addUserFunc;
