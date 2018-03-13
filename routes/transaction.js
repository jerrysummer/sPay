const express = require('express');
const router = express.Router();
const SynapsePay = require('synapsepay');
const { Helpers, Transactions } = SynapsePay;

router.post('/', function (req, res, next) {
  // Create a Transaction

  let { payerNode, payment } = req.body;
  let { amount, currency } = payment;

  const createPayload = {
    to: {
      type: 'ACH-US',
      id: '5a9e93ed09309d00549357d3'
    },
    amount: {
      amount,
      currency
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
      if(err) {
        console.log('payment err! ', err.response.text);
        res.status(400).send(err);
      } else if(transactionResp) {
        res.status(200).send(transactionResp)
      };
    }
  );

});

module.exports = router;
