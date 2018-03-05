import { CREATE_USER } from '../helpers/constants';

const createUser = payload => {
  const url = '/api/user/createAUser';

  return fetch(url)
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