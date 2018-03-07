const CREATE_USER = 'create_user';
const LINK_USER_ACCOUNT = 'link_user_account';
const MAKE_PAYMENT = 'make_payment';

const defaultUser = {
  email: 'javascriptTest@synapsepay.com',
  legal_name: 'Node TestUser',
  phone_number: 9011111111,
  password: 'test1234',
}

const defaultAccount = {
  nickname: 'Node Library Checking Account',
  name_on_account: 'Node Library',
  account_num: '72347235423',
  routing_num: '051000017',
  type: 'PERSONAL',
  class: 'CHECKING'
}

const defaultPayment = {
  nickname: 'Node Library Checking Account',
  name_on_account: 'Node Library',
  account_num: '72347235423',
  routing_num: '051000017',
  type: 'PERSONAL',
  class: 'CHECKING'
}

export {
  CREATE_USER,
  LINK_USER_ACCOUNT,
  MAKE_PAYMENT,
  defaultUser,
  defaultAccount,
  defaultPayment
}