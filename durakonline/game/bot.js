'use strict'
const Game_game = require('./du.game');
const Konduktor=require('./botstate');
const astart=require('./start');
const defstart=require('./defstart');
const User = require('../models/user');
class Bot{
    constructor(durak){
	this.check=new Array();	
	this.client={};
	this.durak=durak;
	this.map=[this.client,this];
	this.clients.bind(this);
	this._myrole=this.durak.roles[this.durak.target];
    this.mongo(this.durak)
	};
	async mongo(Durak){try{let result = await User.findOne({ name:Durak.usernames[0]});
	if(result&&result?.checked){result.checked.get('bot').forEach(i=>{this.check.push(Number(i))});
	//console.log(this.check);
	}else{[0,0].forEach(i=>{this.check.push(Number(i))})
	}}catch(error){console.error(error);}
	}
 checks(){let du=this.durak;
	 let fci=(this.check).map(i=>{return i});
	 User.findOne({ name:du.usernames[0]},(err,result)=>{
 if (err){ return console.log(err)};		 
	 if(result&&result?.checked){result.checked.set('bot',fci); result.save();}}	).catch((error)=>console.log(error))
		 };	
	
konduktor=new Konduktor();	
set clnt(a){this.client=a;
this.map=[this.client];
this.init()[0];
this.init()[1];
this.client.on('message',(message)=>{this.Message(message,this.map,this.durak)});

this._myrole==='attacker'?this.start():null;
	};
clients(){console.log(this.durak)};

async Message(message, map, durak) {
	
	
	let MSG = JSON.parse(message);
	//console.log(MSG);
(MSG?.res)?[this.durak.roles=MSG.res,this.init()[0],this.init()[1],this._myrole=this.durak.roles[this.durak.target]]:null;

	let type = MSG?.type;
	if (type === 'start'){await this.start();}
	if (type === 'set' && durak !==null&&MSG?.role==="defender"&&!MSG.taks) {
	let players=MSG?.players;	
	let pos=MSG?.pos;
	let u=durak.players[players][pos];
	this.konduktor.setback=u;
	//console.log(durak.players[durak.target])
	await Game_game(MSG, map, durak,this)
	await this.start(MSG);
	
	
	}
	if (type === 'set' && durak !==null&&MSG.taks) {
	return	await Game_game(MSG, map, durak,this);
	}
	////defff///
	if (type === 'set' && durak !==null&&(MSG?.role==="attacker")&&!MSG.taks) {
	let players=MSG?.players;	
	let pos=MSG?.pos;
	let u=durak.players[players][pos];
	this.konduktor.setAktive=u;
	
	await this.defstart(MSG);	
	
	}
	if (type === 'set' && durak === null) {
		console.log("GAME OVER");
	}
 };
 init(){return [this.durak.attacker=this.durak.players[this.durak.roles.indexOf('attacker')],this.durak.defender=this.durak.players[this.durak.roles.indexOf('defender')]];}
 
async start(msg){try{await astart.call(this,msg)}catch(error){console.error(error);}};
async defstart(msg){try{await defstart.call(this,msg)}catch(error){console.error(error);}};
}




module.exports=Bot;