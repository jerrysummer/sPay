import { LINK_USER_ACCOUNT } from '../helpers/constants';

export default (state = initialState, action) => {
  switch (action.type) {
    case LINK_USER_ACCOUNT:
      return action.payload;
    default:
      return state;
  }
}


const initialState = null;
