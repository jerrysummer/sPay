import * as actions from '../actions/actions';

describe('actions tests', () => {

  test('it should return null when payload is not provided ', () => {
    expect(typeof actions.createUser(null)).toEqual('object');
  });

});


// test other actions etc. 