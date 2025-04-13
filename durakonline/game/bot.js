'use strict'
const Game_game = require('./du.game');
const Konduktor=require('./botstate');
const astart=require('./start');
const defstart=require('./defstart');
const User = require('../models/user');
class Bot{
check=new Array();	
	
map=[];
	
_myrole='';
    	 constructor(){
    
	};
	async mongo(DuserNam){try{let result = await User.findOne({ name:DuserNam});
	if(result&&result?.checked){result.checked.get('bot').forEach(i=>{this.check.push(Number(i))});
	//console.log(this.check);
	}else{[0,0].forEach(i=>{this.check.push(Number(i))})
	}}catch(error){console.error(error);}
	}
 checks(du){
	 let fci=(this.check).map(i=>{return i});
	 User.findOne({ name:du},(err,result)=>{
 if (err){ return console.log(err)};		 
	 if(result&&result?.checked){result.checked.set('bot',fci); result.save();}}	).catch((error)=>console.log(error))
		 };	
	
konduktor=new Konduktor();	
botclassInit(Client,durak){
this._myrole=durak.roles[durak.target];	 
this.map=[Client];	 
let map=[Client];
this.init(durak)[0];
this.init(durak)[1];
Client.on('message',(message)=>{this.Message(message,map,durak)});
//console.log(this._myrole)
this._myrole==='attacker'?this.start(durak):null;
	};
//clients(){console.log(this.durak)};

async Message(message, map, durak) {
	
	
	let MSG = JSON.parse(message);
	//console.log(MSG);
(MSG?.res)?[durak.roles=MSG.res,this.init(durak)[0],this.init(durak)[1],this._myrole=durak.roles[durak.target]]:null;

	let type = MSG?.type;
	if (type === 'start'){await this.start(durak);}
	if (type === 'set' && durak !==null&&MSG?.role==="defender"&&!MSG.taks) {
	let players=MSG?.players;	
	let pos=MSG?.pos;
	let u=durak.players[players][pos];
	this.konduktor.setback=u;
	//console.log(durak.players[durak.target])
	await Game_game(MSG, map, durak,this)
	await this.start(durak,MSG);
	
	
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
	
	await this.defstart(durak,MSG);	
	
	}
	if (type === 'set' && durak === null) {
		console.log("GAME OVER");
	}
 };
 init(durak){return [durak.attacker=durak.players[durak.roles.indexOf('attacker')],durak.defender=durak.players[durak.roles.indexOf('defender')]];}
 
async start(durak,msg){try{await astart.call(this,durak,msg)}catch(error){console.error(error);}};
async defstart(durak,msg){try{await defstart.call(this,durak,msg)}catch(error){console.error(error);}};
}




module.exports=Bot;