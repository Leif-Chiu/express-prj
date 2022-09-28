const passport = require('passport');
const User = require('../models/user');
const jwttoken = require('jsonwebtoken');

const {Strategy: JwtStrategy, ExtractJwt} = require('passport-jwt');

passport.use(User.createStrategy({
    usernameField: 'id',
    passwordField: 'password'
}));

const jwtOpt = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: '123456789'
}

passport.use('jwt', new JwtStrategy(jwtOpt, async function(payload, done){
    try {
        let user = await User.find({id: payload.id});
        if(user.length === 0) {
            return done(null, false);
        }
        return done(null, user);
    } catch (err) {
        return done(err, false);
    }
}));

const initialize = function() {
    return passport.initialize();
}

const session = function() {
    return passport.session();
}

const localAuth = function() {
    return passport.authenticate('local', { session: false });
}

const jwtAuth = function() {
    return passport.authenticate('jwt', {session: false});
}

module.exports = {
    initialize,
    session,
    localAuth,
    jwtAuth
}