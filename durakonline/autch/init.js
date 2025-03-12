'use strict'
const User = require('../models/user');
const bCrypt = require('bcrypt');
const uuid = require('uuid');
module.exports = async function (req, res, userId) {
    // console.log(req.session.userId)
    console.log(`userId${userId}`)
    if (!req.body) return res.sendStatus(400);
   // console.log(req.body)
    let user_name = (req.body.name.substring(0, 6) === "GamerX") ?null : req.body.name;
    
    let password = req.body.password;
    let user = user_name? await User.findOne({ name: user_name }): await User.findOne({ token: req.body.token });
    let inithashed = user && user_name && password ? initHash(password,user):false;
    if (user && inithashed ) {
        let message = { result: 'OK', 'type': 'susses', name: user.name, token: user.token }
        user.session_id = userId; await user.save()
        console.log(message)
        // await res.send(message)
        return message
    }
    if (user && (req.body.name.substring(0, 6) === "GamerX")) {
        let message = { result: 'OK', 'type': 'susses', name: user.name, token: user.token }
        user.session_id = userId; await user.save()
        console.log(message)
        // await res.send(message)
        return message
    }
    //use anonimus
    if (!user) {
        let user_password = req.body.password ? req.body.password : uuid.v4();
        let hashed = createHash(user_password);
        let join_key = uuid.v4()
		let yname;
		req.body.name==="GamerX"?yname=req.body.name+userId.slice(1,5):yname=req.body.name;
        let user = new User({ name: yname, hash: hashed, token: join_key, frends_name: [], postmessage: [], email: '', session_id: userId,checked:new Map() })
		user.checked.set('bot',[0,0]);
        await user.save();
        let message = { result: 'OK', 'type': 'susses', name: user.name, token: user.token, password: user_password }
        return message;
    }
    else if (user && !inithashed) { let message = { result: 'OK', 'type': 'susses', 'done': "???" }; return message; }
    else {
      
        let message = { result: 'OK', 'type': 'susses','done':"invalid password" }
        console.log(message)
        //await res.send(message)
        return message
    }
}



let initHash = function (password,user) {
    return bCrypt.compareSync(password, user.hash);
}

let createHash = function (password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}