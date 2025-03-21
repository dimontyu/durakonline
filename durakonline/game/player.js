'use strict'
const User = require('../models/user');
const Game_game = require('./du.game');
//const Bot=require('./bot');
let ChatGame = require('../chat/chat');
const gameover=require('./gameover');
const mongoplayer=require('./mongoplayer');
module.exports =class Player{
   constructor(durak,D_id,map){
	   this.check=(durak.check)?durak.check.reverse():durak.check??null;	
       
       this.Message=this.Message.bind(this);
       this.init(durak,map,D_id);
    }
async mongo(Durak){try{
	const item=0
	
	if(this.check!==null){//console.log(this.check);
	return}
	
	else{this.check=[];
		let result1 = await User.findOne({ name:Durak.usernames[item]});
	let result2 = await User.findOne({ name:Durak.usernames[item+1]});
		result1.checked.set(Durak.usernames[item+1],[0,0]);await result1.save();
		result2.checked.set(Durak.usernames[item],[0,0]);await result2.save();
		[0,0].forEach(i=>{this.check.push(Number(i))});//console.log(this.check)
		
		}
}catch(error){console.error(error);}
};


	
init(durak,map,D_id){
	
	

durak.players_count===2?this.mongo(durak):null;
let i = 0;	
    for (const item of D_id) {

		durak.id = item;
		durak.target = i;

		let msg = JSON.stringify(durak);
		
		let client = map.get(item);
		
		client ? client.send(msg.toString()) : null;
		
		client?client.on('message',(message)=>{this.Message(item,client,message,map,durak)}):null;
		client?client.on('close', function () { durak = null;}):null;
		i += 1
		}

    
return 0;
};
async Message(userId,ws,message, map, durak,bt) {
	//this.inits()[0];this.inits()[1];
	let MSG = JSON.parse(message);
	(MSG?.res)?[durak.roles=MSG.res,this.inits(durak)[0],this.inits(durak)[1]]:null;
	let type = MSG?.type;
	switch (type) {
        case 'chat':
            ChatGame(ws,userId, MSG,map);
            
	break;}
	
	
	
	//console.log('Att',this.durak.attacker,'\n','DF',this.durak.defender);
	if (type === 'set' && durak !==null) {
	await Game_game(MSG, map, durak,false);
	
	//console.log('Att',this.durak.attacker,'\n','DF',this.durak.defender);
	}
	if (type === 'set' && durak === null) {
		//console.log("GAME OVER");
	}
	if (type === 'gameover' && durak !== null) {
		let item=0;
		if(durak.players_count===2){await mongoplayer(Number(MSG.players),durak.usernames);};
		
		await gameover.call(this);
		//console.log("GAMEOVER");
		MSG.active_suit=durak.active_suit
		await Game_game(MSG, map, durak,false);
	}
	//console.log('Att',this.durak.attacker,'\n','DF',this.durak.defender);
 };
 
 inits(durak){return [durak.attacker=durak.players[durak.roles.indexOf('attacker')],durak.defender=durak.players[durak.roles.indexOf('defender')]];}

	};	
