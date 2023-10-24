const express = require('express');
const router = express.Router();
const { getUser, createUser } = require('../controller/user/userController');
const authenticationController = require('../common/authenticationController');

router.get('/', authenticationController.authenticaToken, getUser);
router.post('/createUser', createUser);
router.post('/login', authenticationController.login);

console.log('userrouter'); 
module.exports = router;