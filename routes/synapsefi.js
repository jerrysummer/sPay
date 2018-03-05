const SynapsePay = require('synapsepay');
const Clients = SynapsePay.Clients;
const Helpers = SynapsePay.Helpers;

const keys = require('../config/keysDev');

const client = new Clients(
  // client id should be stored as an environment variable
  keys.CLIENT_ID,
  // client secret should be stored as an environment variable
  keys.CLIENT_SECRET,
  // is_production boolean determines sandbox or production endpoints used
  false
);

module.exports = {
  Helpers,
  client,
};
