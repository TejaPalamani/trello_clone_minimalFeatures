const express = require('express');
const { CreateUser, LoginUser } = require('../controller/UserController');

const router = express.Router();

router.post('/user/signup', CreateUser);

router.post('/user/signin', LoginUser);

module.exports = router;
