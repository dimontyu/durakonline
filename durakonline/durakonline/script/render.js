"use strict";
import {Umap} from"./durakstart.js";
import {renderText} from"./ix.js";

const contentCards=document.getElementById('contentCards');
export function render(e){//contentCards new content

this.players[this._pos1]=this.players[this._pos1].filter((element,i) => element!==null)
this.players[this._pos0]=this.players[this._pos0].filter((element,i) => element!==null)
contentCards.replaceChildren();
this.startdeck.forEach((item,i)=>{let span=document.createElement("span", { is: "card-a" });

 span.id=item[0]+item[1];
 span._id=span.id;
 span.url=Umap.get(span.id);
 if(i!==0){span.classList.add("card-back");}
 span.classList.add("deck_card");
 span.style.top=i*2+'px';
if(i===0){span.style.right='48px';span.classList.add(span.url);span.classList.remove("card-back")}
 contentCards.appendChild(span);
 })
 e===false?this.startdeck.forEach((item,i)=>{
 let span=document.getElementById(`${item[0]}${item[1]}`);
 span.removeEventListener("click",this.listenerClick,false)
 //span.status={p:1,default:Boolean(false),play:false,pos:Number(),role:String('')};
 
 }):null
//1 
this.players[this._pos1].forEach((item,i)=>{
	
let a=document.getElementById(`${item[0]}${item[1]}`);
[a.status.p,a.status.play,a.status.pos,a.status.role]=[Number(11),this._pos1,i,this._role[1]];
/* a.onclick=this._role[1]==="defender"?defclick.call(this,null):imgclick.call(this,null); */
setTimeout(()=>{a.prop2(i,true);},i*500)
});

renderText.call(this,e);
//0
/* setTimeout(()=>{ */		
this.players[this._pos0].forEach((item,i)=>{
let as=document.getElementById(`${item[0]}${item[1]}`);
[as.status.p,as.status.play,as.status.pos,as.status.role]=[12,this._pos0,i,this._role[0]];
as.addEventListener("click",this.listenerClick,false);
setTimeout(()=>{as.prop0(i,true,'D');
as.classList.remove("card-back");
as.classList.add(as.url);
as.classList.add('cards_number-6-hover');
},i*500);
});

/* },2000) */

}



 
 
export function tablE0(){const items = [0,1,2,3,4,5,6,7];
let table_grid= document.querySelector(".table_gridstart");
table_grid.querySelectorAll("span").forEach((item,i)=>{item.textContent='';
	item.classList.replace("g_ns", "g_g");
})
}		