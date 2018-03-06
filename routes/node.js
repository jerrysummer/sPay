const express = require('express');
const router = express.Router();
const { Nodes } = require('./init');

router.post('/linkUserAccount', function (req, res, next) {
  // Add ACH-US Node through Account and Routing Number Details
  let { user } = req.body;
  let nodes;
  console.log('/linkUserAccount', typeof user, user);
  console.log('/linkUserAccount', typeof global.user, global.user);

  const achPayload = {
    type: 'ACH-US',
    info: {
      nickname: 'Node Library Checking Account',
      name_on_account: 'Node Library',
      account_num: '72347235423',
      routing_num: '051000017',
      type: 'PERSONAL',
      class: 'CHECKING'
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
      if(err) { console.log('err', err) };
      res.send( nodesResponse );
    }
  );

});




module.exports = router;
