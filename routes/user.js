const express = require('express');
const router = express.Router();
const { client, Helpers, Users, Nodes } = require('./init');
require('dotenv').config();

let user;
let nodes;

router.post('/createAUser', function (req, res, next) {
  // Create a User

  let { email, password, phone_numbers, legal_names } = req.body;

  const createPayload = {
    logins: [
      {
        email,
        password,
        read_only: false
      }
    ],
    phone_numbers: [
      phone_numbers
    ],
    legal_names: [
      legal_names
    ],
    extra: {
      note: 'test',
      is_business: false
    }
  };


  Users.create(
    client,
    // fingerprint (specific to user or static for application)
    process.env.FINGERPRINT,
    Helpers.getUserIP(),
    createPayload,
    function (err, userResponse) {
      // error or user object
      user = userResponse;
      global.user = userResponse;
      console.log('user created', typeof user, user)
      if(err) { console.log(err) }; 
      res.send(userResponse);
    }
  );

});



module.exports = router;
