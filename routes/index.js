const router = require('express').Router();
const authenticationRoutes = require('./authentication')
const {middle} = require('../middlewares/index')



router.use('/authentication', authenticationRoutes)


module.exports = router

