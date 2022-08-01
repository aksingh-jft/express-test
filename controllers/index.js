exports.index = (req,res) =>{
    console.log(req.params)
    res.send( 'Express route')
}

exports.cookie = (req,res) =>{
    res.cookie('aman',{name:'aman', isLoggedIn: false}).json({status:'success'})
}
exports.home = (req,res) =>{
    res.render('index')
}