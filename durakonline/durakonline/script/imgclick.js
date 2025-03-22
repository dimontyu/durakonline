"use strict";
import {positing as po}from './positing.js';

export async function imgclick(e){
var client = window.innerWidth < "600";
let pss=this.passes;	
let xx=(this._myrole==='attacker2' && !this.new_count)	
if(e.target.style.top[0]==="-" )return
if(xx&& pss===0 )return
e.preventDefault
//Av.push(e.target);


let d= e.target.status;
let  j=Number(d.play) 
let k=Number(d.pos)
//console.log(e)

let task= await matrix_attacker.call(this,j,k);

if (task===true){
	this.passes+=1;
let u=this.players[j][k];	

this.konduktor.set_aktive(u)
 

this.cash[j].push(this.players[j][k]);
//console.log(this.cash[j])
 
this.players[j].splice(k,1,null)	
	
	
	
	 handleEvent.call(this,e,po[this.passes-1],po[k],j,k,d,this.passes);
  
}

}

async function matrix_attacker(j,k){
let a_cards=this.konduktor.get_aktive();
let b_cards=this.konduktor.get_back().map((i)=>{return[i.one,i.two]}).flat();
let a_b=a_cards.concat(b_cards);
//console.log(a_b)	
let my_card=this.players[j][k];	
let result=a_b.map((i,index)=>{if(!my_card||!i[1]){console.log(my_card)}if(i){let e1=(my_card[1]===i[1]);if(e1){return true}}})
let p_i=this.passes===0;	
let r_a=result.includes(true);

if (r_a||p_i){return true;}//если все Ок промис труе отправляем сокет с данными
else if(!r_a){return false};	}

function handleEvent(event,pos,ps,j,k,d,passes){
	let ev=event.target
var client = window.innerWidth < "600";


const animation = event.target.animate(
  [
    
{ transform: `scale(1) translate(0px,0px) `, },	
{ transform: `scale(1.01)${po[this.passes-1].transform}`, },

  ],{ duration: 280, fill: "none", iterations: 1,easing: "ease-in-out", }
);
animation.id=`butt`;  
  
animation.onfinish = (evt) => { ev.style.left= pos.left;
   ev.style.top =pos.top;
   ev.classList.remove(`cards_number-${6}-hover`);
   ev.style.transform = 'scale(1.15)';
   ev.style.zIndex = -1;ev.style.margin='2px';
  let u=this.players[j].filter(i=>i!==null) 

 if(u.length===0 &&this.deck.length===0&&!this.bot){
 
this.w_m={type:'gameover',players:d.play,ix:true,"role":this._myrole};
 }
else{ 
   this.w_m={type:"set","players":d.play,"pos":d.pos,"id":this.id,"name":this.name,"deck_id":this.deck_id,"role":this._myrole,"passes":passes,"roles":this._role};//отправка рендера всем 
}
 
   
   }		


};