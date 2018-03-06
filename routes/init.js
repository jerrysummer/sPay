const SynapsePay = require('synapsepay');
const { Clients, Helpers, Users, Nodes, Transactions } = SynapsePay;
require('dotenv').config();

const client = new Clients(
  // client id should be stored as an environment variable
  process.env.CLIENT_ID,
  // client secret should be stored as an environment variable
  process.env.CLIENT_SECRET,
  // is_production boolean determines sandbox or production endpoints used
  false
);

module.exports = {
  Helpers,
  client,
  Users,
  Nodes,
  Transactions
};
