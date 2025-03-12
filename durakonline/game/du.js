'use strict'
let DurakGame = require('./durak');
const User = require('../models/user');
const uuid = require('uuid');
const Player=require('./player');
module.exports = async function (userId, map, Game, path,botj) {
	let exg = new DurakGame(path);
	//let exg=durak;
	//let bot=botj?new Bot(durak):null;
	const name_id = uuid.v4();//id- game example
	//let exg = await durak.play_game();
	exg.name = name_id;
	let y = await User.findOne({ session_id: userId});
	//let y=(y1.name==="GamerX")?y1[1]:y1[0]):y1[0];
	
	//let y = await User.findOne({ session_id: userId });
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
	let player=new Player(exg,D_id,map,botj);
	
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
