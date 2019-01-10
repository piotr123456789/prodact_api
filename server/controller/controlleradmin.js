 let admin = require('../connect/connectadmin');
let jwt = require('jsonwebtoken');
 
//  module.exports.register = async (re, res) => {
//   const { username, password } = re.body; 
//   const user = new admin({  username , password  })
//   await admin.register(user,password);
//   res.send('użytkownik został stworzony');
//   };


   module.exports.postAdmin = async (re, res,next) => {
   
    console.log(re.body);
    
   const token = jwt.sign({ id : re.user._id } ,  process.env.JWT_SECRET, { expiresIn: 1200 } );
   

   res.send({token : token , replika : re.body } );

   
   };
   