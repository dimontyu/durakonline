'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; 


var ContentSchema = new Schema({	
name: String,
header: String,
public: Boolean,
p: String,
h1: String,
h2: String,
images:[{uri: {type: String}, tx:{type:String},td:{type:String},fr:{type:String} }],

});





module.exports = mongoose.model('Contentfr', ContentSchema);