'use strict'


var mongoose = require('mongoose');
const bCrypt = require('bcrypt');
var Schema = mongoose.Schema; 
var UserSchema =new Schema({
      message:[{mes:{type: String}, agentname:{type: String}}],
	  postmessage:[{uri:{type: String},message:{type: String}, agentname:{type: String},data:{type: String},now:{type:Boolean},video:{type:Boolean,default:false}}],
	  frends_name:[String] ,
	   name1: String,
	   now:[String],
	   secret: String,
	   secret_data: String,
hash: String,
	token: String,
  session_id:String,
//username: String,
name: String,	   
email: String ,
firstName: String,
lastName: String,
checked:{type: Map,
of:[Number(0),Number(0)]} 	   
});






 let createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }

UserSchema.virtual('url').get(function() {
  return '/users/' + this._id;
});

// Instance method for hashing user-typed password.
UserSchema.methods.setPassword = function(password) {
  // Create a salt for the user.
  this.password =createHash(password);
};

// Instance method for comparing user-typed password against hashed-password on db.
UserSchema.methods.validatePassword = function(password) {
   return  bCrypt.compareSync(password, this.password);
};

// Instance method for comparing user-typed passwords against each other.
UserSchema.methods.passwordsMatch = function(password, passwordConfirm) {
  return password === passwordConfirm;
};

UserSchema.methods.secretMatch = function(secret_value) {
  return this.secret_data === secret_value;
};

UserSchema.methods.emailMatch = function(email_value) {
  return this.email === email_value;
};


UserSchema.virtual('secret_get').get(function() {
  return this.secret;
});





	 
module.exports = mongoose.model('Userws', UserSchema);	 
	
