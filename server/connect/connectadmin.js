var mongoose = require('mongoose');
var passportLocalmongoess = require('passport-local-mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  username: {
        type: String,
      
    },
  password: {
        type: String,
       
    }
});




UserSchema.plugin(passportLocalmongoess);





module.exports = mongoose.model('User', UserSchema);