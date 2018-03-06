import { combineReducers } from "redux";
import currentUser from './currentUser';
import userAccount from './userAccount';
import transactionHistory from './transactionHistory';

const rootReducer = combineReducers({
  // users: users,
  currentUser: currentUser,
  userAccount: userAccount,
  transactionHistory: transactionHistory
});

export default rootReducer;
