//routes that relate to authentication.
//-- /auth/google users navigates to auth/google
// user is sent to authenticate with Google
// google sends the user back to us, but with some data
const passport = require('passport')

//taking in app as argument-its simpler
module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
        scope: ['profile', 'email']
        })
    )

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
          res.redirect('/surveys');
        }
    );

    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    })

    app.get('/api/logout', (req, res) => {
        req.logout();
        //we're utilizing Express' redirect method 
        res.redirect('/');
    });
}