const express = require('express');
const router = express.Router();
const SynapsePay = require('synapsepay');
const { Nodes } = SynapsePay;

router.post('/', function (req, res, next) {
  // Add ACH-US Node through Account and Routing Number Details

  let { user, account } = req.body;
  let {
    nickname,
    name_on_account,
    account_num,
    routing_num,
    type,
   } = account;
  let nodes;

  const achPayload = {
    type: 'ACH-US',
    info: {
      nickname,
      name_on_account,
      account_num,
      routing_num,
      type,
      class: account.class
    },
    extra: {
      supp_id: '123sa'
    }
  };

  Nodes.create(
    user,
    achPayload,
    function (err, nodesResponse) {
      // error or node object
      // node will only have RECEIVE permission until verified with micro-deposits
      nodes = nodesResponse;
      if(err) { 
        console.log('account err! ', err.response.text);
        res.status(400).send(err);
      } else if(nodesResponse) {
        res.status(200).send( nodesResponse )
      };
    }
  );
});

module.exports = router;
