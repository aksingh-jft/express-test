const router = require('express').Router();
const indexController = require('../controllers/index')
const {middle} = require('../middlewares/index')




router.get('/',function(req,res){
  res.send(['aman','sajal','amit','pranav'])
})

router.get('/aman',function(req,res){
  res.send('aman')
})
module.exports = router

