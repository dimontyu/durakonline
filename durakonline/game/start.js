const ranks= ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const suits= ["Ch", "B", "K", "P"];


const Game_game = require('./du.game');
const gameover=require('./gameover');

async function astart(Durak,msg){
//let Durak=this.durak;
let tg=Durak.target;
let dbl=Durak.deck.length===0;
	
        let a =msg?Number(msg?.players):null;
		
		let tp=Durak.players[tg].filter(i=>i!==null);
		let idx=Durak.roles.indexOf('defender');
		let fps=()=>{return Durak.players[idx].filter(i=>i!==null)};
		let fp=msg?Durak.players[a].filter(i=>i!==null):fps();
//dbl?console.log(fp):null
//dbl?console.log(tp):null	
let m_role=this._myrole;
const w_m={type:"set","taks":true,"players":tg,"id":Durak.id,"name":Durak.name,"deck_id":Durak.deck_id,"role":m_role,"roles":Durak.roles,};

if((tp.length===0 || fp.length===0)&&dbl){
	
    if(fp.length===0){await gameover(Durak);//console.log('game aover1');
	this.check[idx]=Number(this.check[idx])+1;
	//console.log('game aover1fp.length===0')
	 
		w_m.ix=true;
        await Game_game(w_m,this.map, Durak,this);this.checks(Durak.usernames[0]);
		//console.log(this.check)
	    return 0;}
	else if(tp.length===0) {await gameover(Durak);
	//console.log('game aover2tp.length===0');
	this.check[tg]=Number(this.check[tg])+1;
	//console.log(tg)
	
	w_m.ix=true;
	await Game_game(w_m,this.map, Durak,this,'game aover2');this.checks(Durak.usernames[0]);
	//console.log(this.check)
	   return 0;}	
    	
	}

if((fp.length===0 )&&!dbl){
	//console.log('game gamefp.length===0');
	await Game_game(msg,this.map, Durak,this);await Game_game(w_m,this.map, Durak,this);return 0;	 
	}
else{			

let k=(Durak.passes!==0)&&(m_role==='attacker')?filterAttach.call(this,/* Durak, */Durak.players[tg]):filterAttach0.call(this,Durak,Durak.players[tg]);

//console.log(`k:${k}`);

if( k!==false && k!==100){
	
Durak.passes +=1
let Mess={type:"set",
players:tg,
pos:Number(k),
id:Durak.id,
name:Durak.name,
deck_id:Durak.deck_id,
role:m_role,
passes:Durak.passes,
roles:Durak.roles};
//let message=JSON.stringify(Mess);
this.konduktor.setAktive=Durak.players[tg][k];	
//await this.Message(message,this.map,Durak);
let tp=Durak.players[tg].filter(i=>i!==null);//console.log(tp.length)		
if( tp.length===1||tp.length===0){/* if(tp.length===0){ */
//Durak.passes===1?w_m.role="defender":null;
	if(!dbl){//console.log('game gamexx');
        await Game_game(Mess,this.map, Durak,this);
        await Game_game(w_m,this.map, Durak,this);}
     if(dbl){//Durak.passes ===1?w_m.role="defender":w_m.role="attacker";
	 w_m.role="defender";
		w_m.ix=true;//console.log('game gamexxx');
		let m=this.map[0];
       Durak.cach[tg].push(Durak.players[tg][Number(k)]);
       Durak.players[tg][Number(k)] = null;
       m.send(JSON.stringify(Mess).toString());
		
		await gameover(Durak);
		this.check[tg]=Number(this.check[tg])+1;
	 setTimeout(() =>{  Game_game(w_m,this.map, Durak,this);},3000);
	 this.checks(Durak.usernames[0]);
	 }
}

else if(tp.length>1){//console.log('tp.length>1game gamexxx')
await Game_game(Mess,this.map, Durak,this)}
	
}
if(k===false){//console.log('k===false')
await Game_game(msg,this.map, Durak,this);

await Game_game(w_m,this.map, Durak,this)	
} 
	 
	}
};



function filterAttach(/* durak, */Dur_ple){
	
	
let A=false;	
let a_cards=this.konduktor.Aktive;
let b_cards=this.konduktor.Back;	
let a_b=a_cards.concat(b_cards);//console.log(a_b)
//let dpm=!durak.players.map((i)=>{if(i.length===0){return null}}).includes(null);

for(let is=0;is<=Dur_ple.length-1;is++){

let result=a_b.findIndex((i,index)=>{if(Dur_ple[is]&&i){return i[1]===Dur_ple[is][1]}})

if(result!==-1){A=is;break}	
	
	
}
		
return A;	
	
};//npm start


function filterAttach0(durak,Dur_ple){
let A=false;
let ls=(Dur_ple.length>4);
	
for(let is=0;is<=Dur_ple.length-1;is++){
//console.log(`Dur_ple:${Dur_ple[is]}`);
let as=(Dur_ple[is][0]!==durak.active_suit);
let bl=ls&&as;	
if(Dur_ple[is]&&bl){A=is;break}
else if(Dur_ple[is]&&!ls){A=is;break}	
}
//console.log(`result:${A}`);	
return A;
	
}	








module.exports=astart;



