import { CREATE_USER } from '../helpers/constants';

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return action.payload;
    default:
      return state;
  }
}


const initialState = null;
