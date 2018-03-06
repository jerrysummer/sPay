import { MAKE_PAYMENT } from '../helpers/constants';

export default (state = initialState, action) => {
  switch (action.type) {
    case MAKE_PAYMENT:
      return [...state, ...action.payload];
    default:
      return state;
  }
}


const initialState = [

];
