'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

/* var ContentSchema = new Schema({	
name: String,
header: String,
p: String,
h1: String,
h2: String,
images:[String],
aws:[String]
}); */
var ContentSchema = new Schema({	
name: String,
header: String,
public: Boolean,
p: String,
h1: String,
h2: String,
images:[{uri: {type: String}, tx:{type:String},td:{type:String},vzr:{type:Boolean,default:false} }],
aws:[String]
});





module.exports = mongoose.model('Content', ContentSchema);