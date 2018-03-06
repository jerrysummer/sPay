import { CREATE_USER } from '../helpers/constants';
import axios from 'axios';

const createUser = payload => {
  const url = '/api/user/createAUser';
  
  return axios.post(url, payload).then((user) => {
    return {
      type: CREATE_USER,
      payload: user,
    }
  });

}

export {
  createUser,
}