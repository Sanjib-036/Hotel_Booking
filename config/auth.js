module.exports = {
    ensureAuthenticated: function(req,res,next){
        if(req.isAuthenticated()){
            return next();
        }
        req.flash('error_msg', 'Please log in to continue');
        res.redirect('/users/login');
    },
    notLoggedIn: function(req, res, next){
        if(!req.isAuthenticated()){
            return next();
        }
        req.flash('error_msg', 'Please Log In');
        res.redirect('/home',{
        });
    }

}