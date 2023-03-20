const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');


//GET - Home page Router
router.get('/', homeController.home);

//router that filter and accept only url with '/project'
router.use('/project', require('./project'));

module.exports = router;
