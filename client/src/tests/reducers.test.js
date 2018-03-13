import currentUser from '../reducers/currentUser';
import transactionHistory from '../reducers/transactionHistory';

describe('currentUser reducer', () => {

  test('it should return null when not user is specified ', () => {
    expect(currentUser(null, {})).toEqual(null);
  });
  

  test('it should replace old user with new user ', () => {
    let action = {
      type: 'create_user',
      payload: { user: 'jane' }
    }
    expect(currentUser({user: 'jack'}, action)).toEqual({user: 'jane'});
  });


});


// test other reducers etc. 