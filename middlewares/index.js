exports.middle = function(req,res,next){
  if(req.cookies.aman.isLoggedIn == true){
    next()
  }else{
    res.send('ERROR')
  }
}