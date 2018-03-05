import { CREATE_USER } from '../helpers/constants';

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      console.log( action.payload )
      return state;
    default:
      return state;
  }
}


const initialState = [

];
