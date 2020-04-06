module.exports.profile = function(req,res){
    return res.render ('user_profile')}

 module.exports.signup = function(req,res){
     return res.render('user_sign_up',
     {
         title : "codeial | sign up"
     })
 }

 module.exports.signin = function(req,res){
    return res.render('user_sign_in',
    {
        title : "codeial | sign in"
    })
}

//get the sign up data 

module.exports.create = function(req,res){
    
}

// for sign in data
module.exports.createSession = function(req,res){
    
}