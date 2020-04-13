const user = require('../modals/user');

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

module.exports.autocomplete.create = function(req,res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect ('back');
}
    user.findOne({email : req.body.email}, function(err,user){
        if (err){Console.log('error in signing up');
         return}
         if(!user){ user.create(req.body, function(err,user){
                 if(err){Console.log('error in creating user while signing up');  
                 return}
                    return res.redirect('/users/sign-in');  
                })
         }else{return res.redirect ('back');}
    });
} 

// for sign in data
module.exports.createSession = function(req,res){
    
}