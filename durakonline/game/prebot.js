export function Prebot(e){
	

this.passes=e.passes;
let xx=(e.role==='defender');//если мсг от кроющ
let a_a=((e.role==='attacker')||(e.role==='attacker2'));//for defender	
let j=Number(e.players);
let k=Number(e.pos);
var p_p=this.players[j][k];
var i_i=e.broken_card;
let ii=(j===this._pos2)||(j===this._pos3)
let rb;
function sort_card2(){this.konduktor.get_aktive().forEach((i,index,a)=>
{if((i[0]===i_i[0])&&(i[1]===i_i[1])){a.splice(index,1);rb=i;}});
 rb?this.konduktor.set_back(rb,this.players[j][k],this.passes-1):null;
    }; 
 
if(this._myrole==="defender"){
 this.konduktor.set_aktive(this.players[j][k])	 
 };
	
if(this._myrole==="attacker2" || this._myrole==="attacker"){	
 xx?sort_card2.call(this):null;
} 
 
	
	
this.cash[j].push(this.players[j][k]);	
this.players[j].splice(k,1,null); 
//console.log(this.konduktor.get_back())
//console.log(this._a);
return [p_p,rb] } 