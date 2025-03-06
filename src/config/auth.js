const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2');
require('dotenv').config();

passport.use(new OAuth2Strategy({
    authorizationURL: process.env.AUTH_URL,
    tokenURL: process.env.TOKEN_URL,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
}, (accessToken, refreshToken, profile, done) => {
    return done(null, { accessToken, profile });
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

module.exports = passport;
