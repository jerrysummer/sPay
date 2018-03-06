const express = require('express');
const router = express.Router();
const { Helpers, Transactions } = require('./init');

router.post('/createTransaction', function (req, res, next) {

  // Create a Transaction

  console.log(req.body)

  let { payerNode } = req.body;

  const createPayload = {
    to: {
      type: 'SYNAPSE-US',
      id: '5a9e93ed09309d00549357d3'
    },
    amount: {
      amount: 1.10,
      currency: 'USD'
    },
    extra: {
      supp_id: '1283764wqwsdd34wd13212',
      note: 'Deposit to bank account',
      webhook: 'http://requestb.in/q94kxtq9',
      process_on: 1,
      ip: Helpers.getUserIP()
    },
    fees: [{
        fee: 1.00,
        note: 'Facilitator Fee',
        to: {
          id: '5a9e93ed09309d00549357d3'
        }
      }]
  };

  let transaction;

  Transactions.create(
    payerNode.data[0],
    createPayload,
    function (err, transactionResp) {
      // error or transaction object
      transaction = transactionResp;
      console.log('tranactoin!: ',transaction)
    }
  );


});



module.exports = router;
