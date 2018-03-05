const express = require('express');
const router = express.Router();
const { client, Helpers, Users} = require('./init');

/* GET users listing. */
router.get('/createAUser', function (req, res, next) {
  console.log('test post', process.env.FINGERPRINT)
  // Create a User

  const createPayload = {
    logins: [
      {
        email: 'javascriptTest@synapsepay.com',
        password: 'test1234',
        read_only: false
      }
    ],
    phone_numbers: [
      '901.111.1111'
    ],
    legal_names: [
      'Node TestUser'
    ],
    extra: {
      note: 'Interesting user',
      supp_id: '122eddfgbeafrfvbbb',
      is_business: false
    }
  };

  let user;

  Users.create(
    client,
    // fingerprint (specific to user or static for application)
    process.env.FINGERPRINT,
    Helpers.getUserIP(),
    createPayload,
    function (err, userResponse) {
      // error or user object
      user = userResponse;
    }
  );

});


router.get('/getAllUsers', function (req, res, next) {
  // And insert something like this instead:
  res.json([{
    id: 0,
    username: "ALL USERS"
  }
  ]);
});

module.exports = router;
