'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var pushSchema = new Schema({
	user_agent:String,
	name:String,
    endpoint: String,
    keys: {
        p256dh: String,
        auth: String
    }
});

const Push = mongoose.model('Push', pushSchema);

module.exports = Push;