# sPay
A payment portal using SynapseFI API following the Marketplace Flow. This mobile friendly app allows you to easily pay the vendor through an intuitive workflow. 

React + Redux 

Node + Express

### How to use
Follow onscreen instruction and fill out the necessary forms. 

Values are prepopulated for easy testing/validation and are editable. 

### Setup

```
$ cd /path/to/dir
$ yarn install
$ yarn dev
```

Create a .env file on the server root directory with the following values filled for API:
```
CLIENT_ID = 'put_your_id_here'
CLIENT_SECRET = 'put_your_secret_here'
FINGERPRINT = 'put_your_device_fingerprint_here'
```

Supports [`Redux DevTools Chrome Extension`](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

### Demo

![Game Preview](./demogif.gif)

## TODOs

- [ ] Deploy to Heroku
- [ ] Add form validation for all fields
- [ ] Add error alerts; currently error is logged to console
- [ ] Add more tests