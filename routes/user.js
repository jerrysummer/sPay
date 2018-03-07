require('dotenv').config()
const express = require('express');
const router = express.Router();
const SynapsePay = require('synapsepay');
const { Clients, Helpers, Users } = SynapsePay;

const client = new Clients(
  // client id should be stored as an environment variable
  process.env.CLIENT_ID,
  // client secret should be stored as an environment variable
  process.env.CLIENT_SECRET,
  // is_production boolean determines sandbox or production endpoints used
  false
);

let user;
let nodes;

router.post('/', function (req, res, next) {
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
      console.log('user created', typeof user, user)
      if(err) { console.log(err) }; 
      res.send(userResponse);
    }
  );

});



module.exports = router;
