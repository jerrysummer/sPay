import { combineReducers } from "redux";
import currentUser from './currentUser';
import userAccount from './userAccount';

const rootReducer = combineReducers({
  // users: users,
  currentUser: currentUser,
  userAccount: userAccount,
});

export default rootReducer;
