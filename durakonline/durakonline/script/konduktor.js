"use strict";

export class Konduktor{
	
	back;
	aktive;
	
constructor(){
this.back=[];

this.aktive=[];


	
this.broken_card=this.broken_card.bind(this);
this.set_back=this.set_back.bind(this);
this.attach=this.attach.bind(this);

this.clearAll=this.clearAll.bind(this);
this.get_aktive=this.get_aktive.bind(this);
this.get_back=this.get_back.bind(this);
this.set_aktive=this.set_aktive.bind(this);
	
}
broken_card(){/* console.log('this..broken_card'); */return(this.back[this.back.length-1])?.one;}//битая карта

atack_card(){/* console.log('this.atack_card'); */return(this.back[this.back.length-1])?.two;}//atak карта

set_back(i,my_card,ps){this.back.push({one:i,two:my_card,ps:ps})}


attach(u,lft){
this.aktive.push(u);} 



get_aktive(){return this.aktive}

get_back(){return this.back}

set_aktive(u){!this.aktive.includes(u)?this.aktive.push(u):null}


clearAll(){

this.back=[];
this.aktive=[]; 
}

}