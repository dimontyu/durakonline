
let a = [`top: 190px;right: -200px;`, `top: 190px;right: -154px;`, `top: 190px;right: -102px;`, `top: 190px;right: -47px;`, `top: 190px;right:0px;`, `top: 190px;right:47px;`, `top: 120px;right: -200px;`, `top: 120px;right: -154px;`, `top: 120px;right: -102px;`, `top: 120px;right: -47px;`, `top: 120px;right:0px;`, `top: 120px;right:47px;`, `top: 120px;right:70px;`, `top: 120px;right:100px;`, `top: 120px;right:120px;`, `top: 120px;right:140px;`, `top: 120px;right:160px;`, `top: 120px;right:190px;`]
let b = [`top: -390px; right: -200px;`, `top: -390px;right: -154px`, `top: -390px;right: -102px`, `top: -390px;right: -47px;`, `top: -390px;right:0px;
`, `top: -390px;right:47px;`,
    `top: -390px;right: -120px;`
    , `top: -390px;right: -74px;`
    , `top: -390px;right: -20px;`
    , `top: -390px;right: -47px;`
    , `top: -390px;right:20px;`,
    `top: -390px;right:50px;`,
    `top: -390px;right:80px;`,
    `top: -390px;right:130px;`]

var items=0;
export class Card extends HTMLSpanElement {
static url;//url background style card
#idf=0;
status={p:1,default:Boolean(false),play:false,pos:Number(),role:String('')}
  constructor() {
    super();
	
  }
  koko(){this.style.right='48px';this.classList.add(span.url);this.classList.remove("card-back")}
  connectedCallback(){items+=1;this.#idf=items;
}
   disconnectedCallback() {
this.url!==undefined&&this.classList.contains(this.url)?this.classList.remove(this.url):null;	   
this.status={p:1,default:Boolean(false),play:false,pos:Number(),role:String('')};
this.url=''	   
	items-=1;   
    //console.log(this.#idf);
  }
  //set _id(x){this.#idf.id=window.btoa(x)};
  prop0(i,arr,n){//console.log(this.status)
  animationcard0.call(this,i,arr,n)
//this.addEventListener('click',handle);
//this.addEventListener("dragstart", dragstartHandler);
this.draggable="true"; 
  };
  prop2(i,arr){animationcard2.call(this,i,arr);}
  //prop3(i){animationcard3.call(this,i);}
   //prop4(i){animationcard4.call(this,i);}
  // prop5(i){animationcard5.call(this,i);}
}
customElements.define("card-a", Card, { extends: "span" });


function handle(event){event.target.classList.remove("card-back");
event.target.classList.add(event.target.url);
}
function dragstartHandler(ev) {
     ev.dataTransfer.dropEffect = "move";
    ev.dataTransfer.setData("text/html", ev.target.id);
	
  }
function animationcard0(i,arr,n){
	//n?console.log(i+n):console.log(i);
let styleN=a[i];
if(arr){	
  const animation = this.animate(
  [
    
{top:'0px',right:"0px"},	
{ transform: `translate(${50+i}px, ${10+i}px)` },

  ],{ duration: 250, fill: "none", iterations: 1,easing: "ease-in-out", }
);
animation.id=`butt`;  
  
animation.onfinish = (evt) => {this.style=styleN;}
}else{this.style=styleN}
}
function animationcard2(i,arr){
let styleN=b[i];
if(arr){	
  const animation = this.animate(
  [
    
{top:'0px',right:"0px"},	
{ transform: `translate( ${10+i}px,-387px)`, },

  ],{ duration: 250, fill: "none", iterations: 1,easing: "ease-in-out", }
);
animation.id=`butt2`;  
  
animation.onfinish = (evt) => {this.style=styleN;}
}else{this.style=styleN}
}

function animationcard3(i){  
  const animation = this.animate(
  [
    
{ transform: `scale(1) translate(0px,0px) `, },	
{ transform: `translate(387px, ${10+i}px)`, },

  ],{ duration: 550, fill: "none", iterations: 1,easing: "ease-in-out", }
);
animation.id=`butt3`;  
  
animation.onfinish = (evt) => {this.style.right= '-387px';}

}

function animationcard4(i){  
  const animation = this.animate(
  [
    

{ transform: `translate(387px, ${10+i}px)`, },
{ transform: `scale(1) translate(0px,0px) `, },	

  ],{ duration: 250, fill: "none", iterations: 1,easing: "ease-in-out", }
);
animation.id=`butt3`;  
  
animation.onfinish = (evt) => {this.style=a[i] ;}

}
function animationcard5(i){  
  const animation = this.animate(
  [
    

{ transform: `translate(387px, ${10+i}px)`, },
{ transform: `scale(1) translate(0px,0px) `, },	

  ],{ duration: 250, fill: "none", iterations: 1,easing: "ease-in-out", }
);
animation.id=`butt3`;  
  
animation.onfinish = (evt) => {this.style=b[i] ;}

}