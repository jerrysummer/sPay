import { CREATE_USER, LINK_USER_ACCOUNT, MAKE_PAYMENT } from '../helpers/constants';
import axios from 'axios';

const createUser = ( payload ) => {
  const url = '/synapsepay/users';
  
  return axios
    .post(url, payload)
    .then((user) => {
      return {
        type: CREATE_USER,
        payload: user.data,
      }
    })
    .catch((error) => {
      console.log('creatUser err! ',error);
    });
}

const linkUserAccount = ( payload ) => {
  const url = '/synapsepay/nodes';

  return axios
    .post(url, payload)
    .then((account) => {
      return {
        type: LINK_USER_ACCOUNT,
        payload: account,
      }
    })
    .catch((error) => {
      console.log('linkAcct err!', error);
    });
}

const makePayment = ( payload ) => {
  const url = '/synapsepay/transactions';

  return axios
    .post(url, payload)
    .then((payment) => {
      return {
        type: MAKE_PAYMENT,
        payload: payment,
      }
    })
    .catch((error) => {
      console.log('makePayment err! ',error);
    });
}

export {
  createUser,
  linkUserAccount,
  makePayment
}