module.exports.home = function(req,res){
    return res.render ('home',{
        title:"Home"
    });
} //module.exports action name = function (req,res){something..}