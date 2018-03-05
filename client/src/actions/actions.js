import { CREATE_USER } from '../helpers/constants';

const createUser = payload => {
  console.log('action', payload)
  return {
    type: CREATE_USER,
    payload
  }
}

export {
  createUser,
}