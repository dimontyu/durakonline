'use strict'
//let ChatGame = require('../chat/chat');
let Game_connekt = require('../game/du');
//let Game_game = require('../game/du.game');

exports.message = async function (ws, message,userId, map, Game, path) {
	
	//console.log(this)
    let MSG = JSON.parse(message);
    let type = MSG?.type;
   // console.log(Game?.size)
   // console.log(path)

    switch (type) {
        case 'tchat':
		     console.log(this)
            //ChatGame(ws,userId, MSG,map);
            //ChatGame(wss, map, ws, WebSocket, userId, MSG);
            break;
        case 'start': (Game?.size >= path)? Game_connekt(userId, map, Game, path,false):path===2 ?huis_bot(ws):null;
            break;
		case 'start-bot':startBot(userId, map, Game, path);
            break;	
       
        case 'hi':
            let msg = JSON.stringify({ "id": userId, connect: path });
            ws.send(msg.toString());

            break;
        default:
            //console.log(`Sorry, we are out of ${type}.`);
            return 0;
    };
};

function huis_bot(ws){
	
	 let msg = JSON.stringify({ "bot": 'hu is' });
      ws.send(msg.toString());
	
	
	
};

function startBot(userId, map, Game, path){let a=Game;a.add('bot2');

		Game_connekt(userId, map,a, path,true)}