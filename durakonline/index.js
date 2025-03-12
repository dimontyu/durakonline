'use strict';

require('dotenv').config();
//var User = require('./modelss/user');
const express = require("express");
const app = express();
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors')
const autch = require('./autch/autch');//ws
const register = require('./autch/registration');//ws
//const init = require('./autch/init');//ws
const Connect=require('./connect');//ws
const {WebSocket, WebSocketServer } = require('ws');//ws
const server = http.createServer(app);//ws
const map = new Map();//ws

app.use(cors()) 
var session = require('express-session');


let RedisStore = require("connect-redis").default;
const { createClient } = require("redis");


// Initialize client.
let redisClient = createClient();
redisClient.connect().catch(console.error);

// Initialize store.
let redisStore = new RedisStore({
  client: redisClient
  
});

const sessionParser= session({
    store: redisStore,
    resave: false, // required: force lightweight session keep alive (touch)
    saveUninitialized: false, // recommended: only save session when data exists
    secret: "keyboard cat",
	
  })
  app.use(sessionParser)
  





app.use(bodyParser.urlencoded({ extended: false }))

//password

/**
 * Connect to MongoDB.
 */

//var dev_db_url =process.env.MONGODB_URI;
//var mongoDB =  dev_db_url;
var mongoDB = 'mongodb://localhost:27017/' ;
mongoose.connect(mongoDB, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

/**
 * Express configuration.
 */
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
   //maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
}


//app.use(favicon(path.join(__dirname, 'static', 'images/pic1.ico')))
app.use("/", express.static(__dirname + '/durakonline',options));
//app.use("/", express.static(__dirname + '/static'));
//app.use("/", express.static(__dirname + '/test-public'));
//app.use("/", express.static(__dirname + '/node_modules'));


app.use(bodyParser.json());

// Error handler
//WEBSOCKET POSTS


app.post('/logjin',function(req,res){ let n=map ; autch.login(req,res,n)});//ws
app.delete('/logout',function(req,res){let n=map ;  autch.logout(req,res,n)});//ws
app.delete('/nouser',(req,res)=> autch.logostorage(req,res));
app.post('/lg', function (req, res) { autch.loginGET(req, res) });//ws
app.post('/register',function (req, res) { register(req, res) });//ws
//app.post('/init', function (req, res) { init(req, res) });//ws

const wss = new WebSocketServer({noServer: true });//ws

function onSocketError(err) {
  console.error(err);
}

server.on('upgrade', function (request, socket, head) {
  socket.on('error', onSocketError);

  console.log('Parsing session from request...');

  sessionParser(request, {}, () => {
    if (!request.session.userId) {
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
      return;
    }

    console.log('Session is parsed!');

    socket.removeListener('error', onSocketError);

    wss.handleUpgrade(request, socket, head, function (ws) {
      wss.emit('connection', ws, request);console.log(Buffer.from(head).length);
    });
  });
});//ws



wss.on('connection', function (ws,request) {Connect.connect(ws,map,request)})//ws





//app.listen(process.env.PORT ||80);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8001;
}

server.listen(port);
//server.listen(process.env.APP_PORT, process.env.APP_IP);

module.exports=server;
module.exports =WebSocket;