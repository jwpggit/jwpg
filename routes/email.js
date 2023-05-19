const express = require('express');
const Router = express.Router();
const emailController = require('../controller/emailController');
const uploadImage = require('../utils/multer');

Router.post('/', uploadImage.single('image'), emailController.create);

module.exports = Router