'use strict'
const bCrypt = require('bcrypt');
const User = require('../models/user');
const uuid = require('uuid');
const init = require('./init');
exports.login=async function(req,res,map) {
    console.log(req.body.name, req.session.userId,req.cookies)
    const id = req.session.userId??uuid.v4();

  console.log(`Updating session for user ${id}`);
    req.session.userId = id;
 let msg=await init(req,res,id)
  res.send(JSON.stringify(msg));
};

exports.logout=async function(request,response,map) {
  const ws = map.get(request.session.userId);

  console.log('Destroying session');
  request.session.destroy(async function () {
    if (ws) ws.close();
if (request.body.token) { await User.deleteOne({ token: request.body.token }) }
//if (request.body.token&&!request.body.password){await User.deleteOne({token:request.body.token})}
//if (!request.body.token&&request.body.password){let inuser=await User.findOne({name:request.body.name})
//let inits=inuser?initHash(request.body.password,inuser):false;	
//inits?await User.deleteOne({hash:inuser.hash}):null;
//};
    response.send({ result: 'OK', message: 'Session destroyed' });
  });
};


exports.logostorage=async function(request,response) {
  

  console.log('Destroying localstorage');
 
   
if (request.body.token) { await User.deleteOne({ token: request.body.token }) }
//if (request.body.token&&!request.body.password){await User.deleteOne({token:request.body.token})}
//if (!request.body.token&&request.body.password){let inuser=await User.findOne({name:request.body.name})
//let inits=inuser?initHash(request.body.password,inuser):false;	
//inits?await User.deleteOne({hash:inuser.hash}):null;
//};
    response.send({ result: 'OK', message: 'localstorage delete' });
  
};



exports.loginGET= function(request,response) {

    if (!request.session?.userId) {
     response.send({ result: 'nOK', message: 'Session destroyed' });
    }
    else {
        response.send({ result: 'OK', message: 'Session connect connect' });
    console.log('Session is connect!');
}
  
};

let initHash = function (password,user) {
    return bCrypt.compareSync(password, user.hash);
}