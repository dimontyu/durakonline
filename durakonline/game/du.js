'use strict'
let DurakGame = require('./durak');
const User = require('../models/user');
const uuid = require('uuid');


module.exports = async function (userId, map, Game, path,botj) {
	let exg = new DurakGame(path);
	
	const name_id = uuid.v4();//id- game example
	
	exg.name = name_id;
	let y = await User.findOne({ session_id: userId});
	
	let yname = y ??{ name: "COLLAPSE" };
	Game.delete(userId);
	
	let [G_m, D_id,check] = await sort(Game, yname.name,userId, path,botj);
	((path===2)&&botj&&(y?.checked))?check=y.checked.get('bot'):null;
	exg.deck_id = D_id;
	exg.usernames = G_m;
	exg.cach = [[], [], [], []];
	exg.deck_back = [];
	exg.roles = exg.pl_roles;
	exg.check=check??null;
    botj?initBot(exg,map):initPlayer(exg,D_id,map);	
	
};




async function sort(Game, usr, uid, path,botj) {
	let gamers = [];
	let deck_id = [];
	let check;
	let i = 0;
	gamers.push(usr);
	deck_id.push(uid);
	for (const item of Game) {
		let y = await User.findOne({ session_id: item});
	
		
		let yname =botj?{ name: "BOT" }:y ??{ name: "COLLAPSE" };
		gamers.push(yname.name);
		path===2&&!botj?check=y.checked.get(usr):null
		deck_id.push(item)
		Game.delete(item)
		i += 1
		if (i === (path - 1)) { return [gamers, deck_id,check] }
	}

}

function initBot(durak,map){
const Bot=require('./bot');		
let Client=null
let i = 0;	
    for (const item of durak.deck_id) {

		durak.id = item;
		durak.target = i;

		let msg = JSON.stringify(durak);
		
		let client = map.get(item);
		
		client?Client=client:null;
		client ? client.send(msg.toString()) : null;
				
i += 1

    }
if(Client){let bot=new Bot();
	bot.mongo(durak.usernames[0]);
	bot.botclassInit(Client,durak);
	Client.on('close', ()=>	{ durak = null;bot.konduktor=null;bot.map=null;bot=null;});
	}
};

function initPlayer(exg,D_id,map){
	
const Player=require('./player');
	
new Player(exg,D_id,map);

};