'use strict'
const User = require('../models/user');
const Game_game = require('./du.game');
const Bot=require('./bot');
let ChatGame = require('../chat/chat');
const gameover=require('./gameover');
const mongoplayer=require('./mongoplayer');
module.exports =class Player{
   constructor(durak,D_id,map,botj){
	   this.check=(durak.check&&!botj)?durak.check.reverse():durak.check??null;	
       this.players=D_id;	
       this.durak=durak;
       this.map=map;
       this.Message=this.Message.bind(this);
	   this.bt=botj;
	   this.bot=null;
       this.init(this.durak,this.map);
	   //this.durak.players_count===2&&!this.bt?this.mongo(this.durak):null;
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


	
init(durak,map){
this.durak.players_count===2&&!this.bt?this.mongo(this.durak):null;
let Client=null	
let i = 0;	
    for (const item of this.players) {

		durak.id = item;
		durak.target = i;

		let msg = JSON.stringify(durak);
		
		let client = map.get(item);
		if(this.bt){
		client?null:this.bot=new Bot(durak);
		client?Client=client:null;
		client?client.on('close', ()=>
		{ durak = null;this.bot.konduktor=null;this.bot.map=null;this.bot=null;}):null;
		}
		client ? client.send(msg.toString()) : null;
		if(!this.bt){
		client?client.on('message',(message)=>{this.Message(item,client,message,map,durak,this.bt )}):null;
		client?client.on('close', function () { durak = null;}):null;
		}
i += 1

    }
return	[this.bt?this.bot.clnt=Client:null];
};
async Message(userId,ws,message, map, durak,bt) {
	//this.inits()[0];this.inits()[1];
	let MSG = JSON.parse(message);
	(MSG?.res)?[this.durak.roles=MSG.res,this.inits()[0],this.inits()[1]]:null;
	let type = MSG?.type;
	switch (type) {
        case 'chat':
            ChatGame(ws,userId, MSG,map);
            
	break;}
	
	
	
	//console.log('Att',this.durak.attacker,'\n','DF',this.durak.defender);
	if (type === 'set' && durak !==null) {
	await Game_game(MSG, map, durak,bt);
	
	//console.log('Att',this.durak.attacker,'\n','DF',this.durak.defender);
	}
	if (type === 'set' && durak === null) {
		//console.log("GAME OVER");
	}
	if (type === 'gameover' && durak !== null) {
		let item=0;
		if(durak.players_count===2 &&!this.bt){await mongoplayer(Number(MSG.players),durak.usernames);};
		
		await gameover.call(this);
		//console.log("GAMEOVER");
		MSG.active_suit=durak.active_suit
		await Game_game(MSG, map, durak,bt);
	}
	//console.log('Att',this.durak.attacker,'\n','DF',this.durak.defender);
 };
 
 inits(){return [this.durak.attacker=this.durak.players[this.durak.roles.indexOf('attacker')],this.durak.defender=this.durak.players[this.durak.roles.indexOf('defender')]];}

	};	
