const ranks= ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const suits= ["Ch", "B", "K", "P"];
const gameover=require('./gameover');
const Game_game = require('./du.game');


async function defstart(Durak,msg){
//let Durak=this.durak;
let tg=Durak.target;
let dbl=Durak.deck.length===0;
let a =msg?Number(msg?.players):null;
let b =msg?Number(msg?.pos):null;
let ps =msg?Number(msg?.passes):null;
//let fp=msg&&Durak.players[a].filter(i=>i!==null);
let tp=Durak.players[tg].filter(i=>i!==null);
let idx=Durak.roles.indexOf('attacker');
let fps=()=>{return Durak.players[idx].filter(i=>i!==null)};
let fp=msg?Durak.players[a].filter(i=>i!==null):fps();
let m_role=this._myrole;		
//console.log(tp)
//dbl?console.log(fp):null
//dbl?console.log(tp):null
const w_m={type:"set","taks":true,"players":Durak.target,"id":Durak.id,"name":Durak.name,"deck_id":Durak.deck_id,"role":m_role,"roles":Durak.roles,};	

if((fp.length===1 || tp.length===0)&&dbl){
	
    if(fp.length===1){await gameover(Durak);//console.log('Dgame dover1');
	this.check[idx]=Number(this.check[idx])+1;
	//console.log(idx)
	 
		w_m.ix=true;
        await Game_game(w_m,this.map, Durak,this);this.checks(Durak);
		//console.log(this.check)
	    return 0;}
	else if( tp.length===0){await gameover(Durak);//console.log('Dgame dover2');
	this.check[tg]=Number(this.check[tg])+1;
	//console.log(tg)
	    
		w_m.ix=true;w_m.role="attacker";
        await Game_game(w_m,this.map, Durak,this);this.checks(Durak)
		//console.log(this.check)
	    return 0;}	
    	
	}
if((tp.length===0)&&!dbl){
	//console.log('Dgame game');
	w_m.role="attacker";
	await Game_game(msg,this.map, Durak,this);await Game_game(w_m,this.map, Durak,this);return 0;	 
	}	


let qk=(m_role==='defender')?filterDeffender223.call(this,Durak,Durak.players[tg]):false;
	

//console.log(`qk:${qk}`);
if(qk!==false){
Durak.passes=ps;
Durak.cach[a].push(Durak.players[a][b]);
Durak.players[a][b] = null;
	
let Mess={type:"set",
players:tg,
pos:Number(qk),
id:Durak.id,
name:Durak.name,
deck_id:Durak.deck_id,
role:m_role,
broken_card:this.konduktor.broken_card,
passes:Durak.passes,
roles:Durak.roles};	
let m=this.map[0];

let tp=Durak.players[tg].filter(i=>i!==null);		
if(tp.length===0){

w_m.role="attacker";	
	if(!dbl){m.send(JSON.stringify(Mess).toString());//console.log('Dgame gameqk!dbl');
            setTimeout(() =>{Game_game(w_m,this.map, Durak,this)},300);
			}
        else if(dbl){
		    w_m.ix=true;//console.log('Dgame gameqkdbl');
		    m.send(JSON.stringify(Mess).toString());
		    await gameover(Durak);
            setTimeout(() =>{Game_game(w_m,this.map, Durak,this)},300);
       }
}else if(tp.length>0){
	//console.log('Dgame game qk tp.length>0');	
    setTimeout(() =>{m.send(JSON.stringify(Mess).toString())},300)}	
	
	
}
if(qk===false){//console.log('Dgame game qk===false');
await Game_game(msg,this.map, Durak,this);

await Game_game(w_m,this.map, Durak,this);		 
 };
};




/* function filterDeffender(Dur_ple){
let A=false;	
let a_cards=this.konduktor.Aktive;
let b_cards=this.konduktor.Back;	
let result;
//console.log(`a_cards:${a_cards}`)	
for(let is=0;is<=Dur_ple.length-1;is++){
//console.log(`a_cards:${a_cards}`);	
result=a_cards.findIndex((i,index)=>{if(Dur_ple[is]&&i){
	let w=(ranks.indexOf(i[1])<ranks.indexOf(Dur_ple[is][1]))&&(i[0]===Dur_ple[is][0]);
	let e4=(Dur_ple[is][0]===this.durak.active_suit);
	let e5=(i[0]!==this.durak.active_suit);
	let rw=e4&&e5;
	let wew=w||rw;
	w||rw?a_cards.splice(index,1):null;
	w||rw?b_cards.push(i):null;
	w||rw?this.durak.cach[this.durak.target].push(Dur_ple[is]):null;
	w||rw?Dur_ple[is]=null:null;
	return wew}});	 
 //console.log(`a_cards:${a_cards}`);
//console.log(`result:${result}`);	
if(result!==-1){A=is;break}	
	
	
}	
//A?this.konduktor.setktive=Dur_ple[A]:null;	
return A;	
	
};//np */



function filterDeffender223(durak,Dur_ple){
let A=false;	
let a_cards=this.konduktor.Aktive;
let att=this.konduktor.atack_card;
let b_cards=this.konduktor.Back;	

//console.log(`a_cards:${a_cards}`)	


let result0=Dur_ple.findIndex((item,is)=>{if(item&&att){
	let w=(ranks.indexOf(att[1])<ranks.indexOf(item[1]))&&(att[0]===item[0]);
	w?a_cards.splice(0,1):null;
	w?b_cards.push(att):null;
	w?durak.cach[durak.target].push(item):null;
	w?Dur_ple[is]=null:null;
	
	//console.log(`a_cards:${a_cards}`);
//console.log(`result0:${w}`);
	return w
	     }
});
if(result0!==-1){return result0;}
else if(result0===-1){
																							
																							
let result1=Dur_ple.findIndex((item,is)=>{if(item&&att){
	let e4=(item[0]===durak.active_suit);
	let e5=(att[0]!==durak.active_suit);
	let rw=e4&&e5;
	
	rw?a_cards.splice(0,1):null;
	rw?b_cards.push(att):null;
	rw?durak.cach[durak.target].push(item):null;
	rw?Dur_ple[is]=null:null;
	
	//console.log(`a_cards:${a_cards}`);
//console.log(`result1:${rw}`);
	return rw}
})
if(result1!==-1){return result1}
else{
																							
return Boolean(A);	
}
}else{return false}	
};



module.exports=defstart;