        // strategia dla superAdmin //
var passport = require('passport');
var superAdmin = require('../connect/connectadmin');
var JWTS = require('passport-jwt');
var jwtstr = JWTS.Strategy;
const extractJwT = JWTS.ExtractJwt;


function verifyCallback(payload, done) {
        return superAdmin.findOne({_id: payload.id})
            .then(user => {
                return done(null, user);
            })
            .catch(err => {
                return done(err);
            });
    }

 module.exports = ()=> { passport.use(superAdmin.createStrategy());
        
        const config = {
                jwtFromRequest : extractJwT.fromAuthHeaderAsBearerToken(),
                secretOrKey : process.env.JWT_SECRET
                        }

                         passport.use(new jwtstr(config,verifyCallback));

 console.log('tworzenie strategi');
}

 


