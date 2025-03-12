import {positing as po}from './positing.js';
import {Card} from"./card.js"
import {Konduktor}from './konduktor.js';
import {Rout}from './rout.js';
import {Prerender}from './prerender.js';
import {start,tablE0}from './startrender.js';
import {Umap} from"./durakstart.js";
import {Taks,TaksiX} from"./events.js";
//import {startiX}from './ix.js';
import {imgclick} from"./imgclick.js";
import {defclick} from"./defclick.js";
//console.log(Umap)

export var state={};
const gameName0=document.getElementById('gameName0');
const gameName2=document.getElementById('gameName2');
const gameRole0=document.getElementById('gameRole0');/* class=" player0-role textA">defender</span> */
const gameInfo0=document.getElementById('gameInfo0');

const gameRole2=document.getElementById('gameRole2');/* class="player1-role textA">attacker</span> */
const gameInfo2=document.getElementById('gameInfo2');
const contentCards=document.getElementById('contentCards');
/* <span id="check1" class="player1-name textB">9</span> */
const check1 =document.getElementById('check1');
const check0=document.getElementById('check0');
export class DurakGame {
	    _pos0=null;//позиция юзера игры this.players[this._pos0]
		_pos1=null;//позиция соответсвует this.players[this._pos1] и.тд
		_pos2=null;
		_pos3=null;
		get _myrole(){return this._role[0]}; 
        set _myrole(e){ this._role[0]=e};		//роль юзера
		_round=null;  //счетчик раундов
	    _role=[]; 
		
	
       //Реактивные свойства 
      
		_echo={};//сообщения сервера
		ss=[];
      	 b; 
   constructor(){
       this.startdeck=[];
		this._body={};
        this.name=state.r.name;//id gemes
        this.ws=state.ws;//Websockets()
        this.players_count = state.r.players_count;
        this.deck = state.r.deck;
        this.active_suit = state.r.active_suit;
        this.attacker = state.r.attacker;
        this.defender = state.r.defender;
        this.players = state.r.players;
        this.suits =state.r.suits //['Ch', 'B', 'K', 'P']
        this.ranks =state.r.ranks //['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        this.passes =state.r.passes;
        this.target =state.r.target ;//позиция юзера this.players[this.target]
        this.id =state.r.id ;//ид юзера
        this.deck_id =state.r.deck_id;
		this.static_role=state.r.pl_roles;
		this.usernames=state.r.usernames;
        this.echo=this.echo.bind(this);
        this.cash=[[],[],[],[]];//карты в игре
        this.ws.onmessage=this.echo; //обработчик сообщений сервера 
		this._round=0;
		this._a=[];
		this.check=state.r.check??[0,0];
	  this.bot=this.usernames.includes('BOT');
	  this.listenerClick=this.listenerClick.bind(this);
	  this.listenInfo=this.listenInfo.bind(this);
	   this.connect();
	 
	          
}
konduktor=new Konduktor();
new_count=false;

connect() {
	//contentCards.replaceChildren()//clear content
//this._echo=this.attacker	
//вычисляем индех чтобы позиция юзера игры всегда находилась внизу	
	let index=this.index();
//вычисляемые позиции игроков	
let pos0=index.findIndex((i)=>i===0);this._pos0=pos0;//настраиваем Реактивные свойства 
let pos1=index.findIndex((i)=>i===1);this._pos1=pos1;
let pos2=index.findIndex((i)=>i===2);this._pos2=pos2;
let pos3=index.findIndex((i)=>i===3);this._pos3=pos3;
let a=[pos0,pos1,pos2,pos3]	
let n=this.players_count;
//вычисляемые роли игроков
//console.log(index)	
//console.log(a)
this._role[0]=(n>=2)?this.static_role[pos0]:null;
this._role[1]=(n>=2)?this.static_role[pos1]:null;
this._role[2]=(n>=3)?this.static_role[pos2]:null;
this._role[3]=(n>=4)?this.static_role[pos3]:null;
//this._myrole=this.role_play[Number(this.target)];
this._role=this._role.filter((w) => w!==null);
this._myrole=this._role[0];
this.b=this.back_card();
this.startdeckRender();
start.call(this,true);
let data=JSON.stringify({"install":true,users:this.deck_id,user:this.id,usernames:this.usernames})
window.postMessage(data,origin );

}
requestUpdate(e){start.call(this,false);}

startdeckRender(){this.startdeck=this.deck.concat(this.players[this._pos0]).concat(this.players[this._pos1]);return this.startdeck};

back_card(){let a=document.createElement("span");
//a.class="card_img";
let a4=this.deck[0][0]+this.deck[0][1];
//console.log(a4)
let url=Umap.get(a4);
a.classList.add('card_img');
a.classList.add(url);
a.style.opacity="0.5";return function(){contentCards.appendChild(a)}}


set m_echo(e){
this._echo.ix?tablE0():null;	
this._echo=e;

//console.log(this._round);

(e.pos!==undefined&&!e.ix)?this.rendercard(e):null;
 let eho=(e?.type==="round-taks");

if(e?.type&&!eho){Prerender.call(this,e);renderText.call(this,null);}

(e?.type&&!eho)?null:renderText.call(this,null) 

}

rendercard(e){
let aa=(this.passes===0);	
let c=`${this.players[e.players][e.pos][0]}${this.players[e.players][e.pos][1]}`;
let a=document.getElementById(c);
[a.status.play,a.status.pos,a.status.role]=[e.players,e.pos,e.role];
a.status.p=Number(11);



if(e.broken_card){a.classList.remove("card-back");
a.classList.add(a.url);
handleEvent_de.call(this,e,a)	
}
else{setTimeout(()=>{a.classList.remove("card-back");
a.classList.add(a.url);handleEvent_at.call(this,a,po[e.passes-1])},this.passes===0?2000:1000)}	



}


//отправка рендера всем игрокам
set w_m(send){
    this.ws.send(JSON.stringify(send));
}
//обработчик сообщения сервера
async echo(e){ let message=JSON.parse(e.data) ;
(message.type==="set"&&!message.taks&&(message.id!==this.id))?this.m_echo=message:null;//все сообщения кроме взял карты
(message.type==="round-taks")?Rout.call(this,message):null;
//(message.type==="round-taks"&&message.ix)?this.m_echo=message:null;
}

//вычисляем индех чтобы позиция юзера игры всегда находилась внизу
index(){
	let s=[];let n=this.target;
for(let i=0;i<=this.players_count-1;i++){
	let index=Math.abs(i-n)
  index=s.includes(index)?this.players_count-1:index;
s.push(index);

}
return s;

}
listenerClick(event){this._role[0]==="defender"?defclick.call(this,event):imgclick.call(this,event)}
listenInfo(){ this._echo?.ix?TaksiX.call(this,null):Taks.call(this,null);}

};



function span_atr(x){let a=(x==="attacker")?"Я хожу":(x==="defender")?"Я кроюсь":null;return a};

function renderText(){let aa=(this.passes===0);
gameRole0.textContent=this._role[0];

gameRole2.textContent=this.static_role[this._pos1];

let ix_text=(this._role[0]==="attacker")?"ваш ход":(this._role[0]==="attacker2")?"подкидывай карты":"вам крыться";
let iy_text=(this._role[0]==="attacker")?"бито":"беру";
gameInfo0.textContent=`${!aa?iy_text:ix_text}`;
gameInfo2.textContent=span_atr(this._role[1]);	}

function handleEvent_at(ev,pos){
	//let ev=ev;



const animation = ev.animate(
  [
    
{left :ev.style.left,top:ev.style.top },	
{left: pos.left,top:pos.top },

  ],{ duration: (this.passes===0)?800:500, fill: "none", iterations: 1,easing: "ease-in-out", }
);
animation.id=`butt`;  
  
animation.onfinish = (evt) => { ev.style.left= pos.left;
   ev.style.top =pos.top;
   ev.classList.remove(`cards_number-${6}-hover`);
   ev.style.transform = 'scale(1.15)';
   ev.style.zIndex = -1;ev.style.margin='2px';
}		


};
function handleEvent_de(e,a){
let m=e.broken_card[0]+e.broken_card[1];let sm=document.getElementById(m);
const animation = a.animate(
  [{top:a.style.top,left:a.style.left},
	  {top: sm.style.top,left:sm.style.left}
    
  ],{ duration: (this.passes===0)?800:500, fill: "none", iterations: 1,easing: "ease-in-out", }
);

animation.onfinish = (evt) => {
[a.style.top,
   /*  a.style.right, */
    a.style.left,
    a.style.transform,
    a.style.zIndex,
a.style.margin,]=[sm.style.top,/* sm.style.right, */sm.style.left,sm.style.transform,0,'16px']}

}