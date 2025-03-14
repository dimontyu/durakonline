//import {suitsMapping2,A,passesMapping}from './static.js';

export async function defclick(e){

	if( e.target.style.top[0]==="-")return
e.preventDefault

let d= e.target.status;
let  j=Number(d.play) 
let k=Number(d.pos)

//console.log(e)
let task= await matrix_defender.call(this,j,k);

if ( task===true){//если карту покрыл

e.target.status.p=12;

let anime=await Animation.call(this,e.target,j,k,d,this.passes)
 
}
   
}

async function matrix_defender(j,k){
let my_card=this.players[j][k];


let a_cards=this.konduktor.get_aktive();
let zerro=false;
let result=a_cards.map((i,index,A)=>{
    let e1=(my_card[0]===i[0]);//проверяем соответствие карт
    let e2=this.ranks.indexOf(my_card[1]);
    let e3=this.ranks.indexOf(i[1]);
    let e4=(my_card[0]===this.active_suit);
    let e5=(i[0]!==this.active_suit);
    if(zerro===false){
    if((e1&&(e2>e3))||(e4&&e5)){
    A.splice(index,1)
    
	this.konduktor.set_back(i,my_card,this.passes-1)
 zerro=true;
    return 'back'}}})
//console.log(result);

if ((result.includes('back'))){return true;}//если все Ок промис труе отправляем сокет с данными
else {return false};
}




async function Animation(ev,j,k,d,passes){
let broken_card=this.konduktor.broken_card();	
let m=broken_card[0]+broken_card[1];let sm=document.getElementById(m);
var client = window.innerWidth < "600";		
	let animation=  ev.animate(

  [
	{top :ev.style.top ,/* right:ev.style.right, */
    left:ev.style.left,
    transform:ev.style.transform, },
	
	{ top :sm.style.top,/* right:sm.style.right, */
    left:sm.style.left,
    transform:sm.style.transform },
   
  ],{ duration: 280, fill: "none", iterations: 1,easing: "ease-in-out", }
);

animation.onfinish = (ee) => {
	
	
if(broken_card){
[ev.style.top,
    //ev.style.right,
    ev.style.left,
    ev.style.transform,
    ev.style.zIndex,
    ev.style.margin,]=[sm.style.top ,/*sm.style.right, */sm.style.left,sm.style.transform,0,'16px']
}		
	
	
/* ev.style.top = !client?'-256px':'-375px';
ev.classList.remove(`cards_number-${6}-hover`);
ev.style.transform = 'scale(1.15)'; 
ev.style.margin='2px';
let broken_card=this.konduktor.broken_card();
let wm3=this.konduktor.get_wm3(); 
let wm4=this.konduktor.get_wm4();
let pos_number=(this._pos2===Number(this._echo.players))||(this._pos3===Number(this._echo.players)); 
ev.style.left=(pos_number&&wm4.has(broken_card))?wm4.get(broken_card):wm3.get(broken_card);
console.log(broken_card)       */
  this.cash[j].push(this.players[j][k]);
  
  this.players[j].splice(k,1,null);
let u=this.players[j].filter(i=>i!==null)  
 if(u.length===0 &&this.deck.length===0 &&!this.bot){
 this.w_m={type:'gameover',players:d.play,ix:true,"role":this._myrole};
 }
else{ 
this.w_m={type:"set","players":d.play,"pos":d.pos,"id":this.id,"name":this.name,"deck_id":this.deck_id,"role":this._myrole,"passes":passes,broken_card:broken_card,"roles":this._role};}
   }		


}