"use strict";

export function Taks(){let a_cards=this.konduktor.get_aktive().length===0;
let passes=this.passes!==0;
let bool=(this._myrole==='attacker' || this._myrole==='attacker2' )?a_cards&&passes:!a_cards&&passes;
//console.log(bool);
if(bool){
if(this.players_count===2){

let a=(this._myrole==='attacker')?this.target:this._pos1;

this.w_m={type:"set","taks":true,"players":this.target,"id":this.id,"name":this.name,"deck_id":this.deck_id,"role":this._myrole,"roles":this._role,};}
else{
let a=(this._myrole==='attacker' || this._myrole==='attacker2' )?this.target:1;//this.sorted_pos();

this.w_m={type:"set","taks":true,"players":this.target,"id":this.id,"name":this.name,"deck_id":this.deck_id,"role":this._myrole,"roles":this._role,};}

}return 0;
 };
 
 export function TaksiX(e){if(this._role[0]==="attacker"){/* this.requestUpdate(e) */}
if(this._role[0]==="defender"){this.w_m={type:"start"};}

 };