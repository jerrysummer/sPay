const express = require('express');
const router = express.Router();
const { client, Helpers, Users} = require('./init');

/* GET users listing. */
router.post('/createAUser', function (req, res, next) {
  // console.log(process.env.CLIENT_ID === 'client_id_dcCrIB25l40VWQXRDehpHmM9j3L8KyugfxTZ0azw')
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
      console.log(userResponse)
      if(err) {console.log('err: ',err)};
      if (err) {
        res.sendStatus(400);
      }
      res.sendStatus(200);
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
