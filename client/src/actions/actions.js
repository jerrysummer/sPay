import { CREATE_USER, LINK_USER_ACCOUNT } from '../helpers/constants';
import axios from 'axios';

const createUser = ( payload ) => {
  const url = '/api/user/createAUser';
  
  return axios
    .post(url, payload)
    .then((user) => {
      console.log('this is user: ',user)
      return {
        type: CREATE_USER,
        payload: user.data,
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

const linkUserAccount = ( payload ) => {
  const url = '/api/node/linkUserAccount';

  return axios
    .post(url, payload)
    .then((account) => {
      console.log('this is account: ', account)

      return {
        type: LINK_USER_ACCOUNT,
        payload: account,
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export {
  createUser,
  linkUserAccount
}