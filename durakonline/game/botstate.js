
const ranks= ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const suits= ["Ch", "B", "K", "P"];


class Konduktor{
	back;
	aktive;
	#Wm2;
constructor(){
this.back=[];
this.#Wm2 = new Map();
this.aktive=[];

	
//this.broken_card.bind(this);
//this.set_back.bind(this);

this.clearAll.bind(this);
//this.get_aktive.bind(this);
//this.get_back.bind(this);
//this.set_aktive.bind(this);		
}
get broken_card(){return(this.back[this.back.length-1]);}//битая карта

get atack_card(){return(this.aktive[this.aktive.length-1]);}//atak карта

set setback(my_card){!this.back.includes(my_card)?this.back.push(my_card):null}

get Aktive(){return this.aktive}

get Back(){return this.back}

set setAktive(u){!this.aktive.includes(u)?this.aktive.push(u):null}

clearAll(){
this.back=[];
this.aktive=[];
this.#Wm2.clear(); 
}


}

module.exports=Konduktor;