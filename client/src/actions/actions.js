import { CREATE_USER } from '../helpers/constants';

const createUser = payload => {

  return fetch('/users')
    .then(res => res.json())
    .then(
      users => {
        return {
          type: CREATE_USER,
          payload: users,
        }
      }
    );

}

export {
  createUser,
}