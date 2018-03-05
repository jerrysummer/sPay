import { CREATE_USER } from '../helpers/constants';

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      console.log( action.payload )
      return [...state, ...action.payload];
    default:
      return state;
  }
}


const initialState = [

];
