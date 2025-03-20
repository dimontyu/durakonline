"use strict";

import {Doom} from"./durakstart.js";
import {Card} from"./card.js";
import {DurakGame} from './durak.js';

var ws;

var id_prosses;
//console.log(id_prosses);

const Renderstart =async (response) => {
	new DurakGame(response,ws);
	document.querySelector('pink-floyd').ws = ws;//autch.js connect
	

};
const response_connect=async (response)=>{
let n=Number(response.connect);console.log(n);let buttons=Buttons();
    buttons.forEach((i,index)=>{if(index===(n-2)){i.textContent=`PLAYERS${n}`;i.style.color='#3bff67';Button_index=index}i.setAttribute('disabled',true);})
	
setInterval(()=>{
buttons[0]?[buttons[Button_index]!==buttons[buttons.length-1]?buttons[buttons.length-1].style.display='none':null,buttons.pop()]:clearInterval(this);
     
    }, 2000)
    	
};
self.onerror=(e)=>console.log(e)

var slow=["двоем","троем","четвером"]
var uau=()=>{return ws?.readyState===WebSocket.CLOSED};
const logotyp=document.createElement('motion-lit');
self.document.body.appendChild(logotyp);
/* document.querySelector("#stop_game") */
stop_game.addEventListener('click',async function(e){
  if(window.confirm("Вы действительно хотите выйти?"))
  {ws!==undefined?[ws.close(),Buttons().forEach((i,index)=>{i.style.display='block',i.removeAttribute('disabled'),i.classList.remove('itarget'),i.textContent=`Игра в ${slow[index]}`})]:null;}
return 0});
//игра начнеться когда все игроки ткнут соотв-ю кнопку
Buttons().forEach((start_game,i)=>{start_game.addEventListener('click',async function(e){ws===undefined||uau()?await connect(i+2,e):null;})})//каждая игра идет на своем path


const nav=document.querySelector(".nav");	
var Button_index;

async function connect(path,e) {
  e.target.style.backgroundColor='green';
  e.target.textContent='player wait';
  e.target.classList.add('itarget')

let zn=window.location.hostname==='localhost'?'ws://localhost:8001':'wss://cheroom.ru'
ws = new WebSocket(`${zn}/${path}`);

ws.onopen=async function open(e) {
let data={"type": "hi",};
    // subscribe to some channels
    ws.send(JSON.stringify(data));
	sent()
  };


ws.onmessage= async function message(e){
   let response = JSON.parse(e.data);
if((response.id&&!id_prosses)){id_prosses=response.id;}
    
if((response?.deck_id)&&id_prosses){await Renderstart(response);}

if(response.connect){await response_connect(response)}

if(response.usernames){nav.setAttribute("hidden",true);nav.style.display='none';logotyp.remove();}

if(response.bot){let data={"type": "start-bot",}; bot_game.hidden=false;
	bot_game.addEventListener('click',function(){return ws.send(JSON.stringify(data))})}
  };

ws.onclose= async function close(e){id_prosses=null;
  console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
};

 ws.onerror= async function error(err) {
    console.error('Socket encountered error: ', err.message, 'Closing socket');
    ws.close();
};


 function sent(){let data={type: "start",n:`${path}`};ws.send(JSON.stringify(data))};

};
function handleEvent(){

let set1 = 0;
let scale1 = 1;	

/* -- document.querySelector("#start_game3")*/			
Buttons().forEach((i)=>{
i.addEventListener("click", (event) => {
set1=10-set1;
scale1=3.5-scale1;	
const animation = event.target.animate(
  [
    //{ color: "#431236", offset: 0.233 },{ color: "red", offset: 0.444 },
	{ transform: "scale(1.2) translate(5%,10%)",color: "#431236",offset: 0.133 },
	{ transform: "scale(1.3) translate(8%,10%)",color: "red",offset: 0.333 },
	{ transform: "scale(1.4) translate(9%,10%)",offset: 0.533 },
    { transform: `scale(${1.5}) translate(${set1}%)`,},
  ],{ duration: 3000, fill: "forwards",iterations: 1, }
);
animation.id=`buttons`;  
  
animation.onfinish = (event_animate) => {nav.style.display!=="none"&&animation.commitStyles()}		
},{ once: true })
})

};
handleEvent();
function Buttons(){return Array(start_game2,start_game3,start_game4)}
