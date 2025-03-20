"use strict";




export function renderText(e){

    this.check?check1.textContent=this.check[this._pos1]:null;
    this.check?check0.textContent=this.check[this._pos0]:null;
gameRole2.textContent=this._role[1];
gameName2.textContent=this.usernames[this._pos1];
gameRole0.textContent=this._role[0];
gameName0.textContent=this.usernames[this._pos0];
let aa=(this.passes===0);
let ix_text=(this._role[0]==="attacker")?"ваш ход":(this._role[0]==="attacker2")?"подкидывай карты":"вам крыться";
let iy_text=(this._role[0]==="attacker")?"бито":(this._role[0]==="attacker2")?"бито":"беру";
gameInfo0.textContent=`${!aa?iy_text:ix_text}`;
gameInfo2.textContent=span_atr(this._role[1]);
    e ? tablE0() :tablE();
e?null:gameInfo0.textContent="Играть";
e?null:gameInfo2.textContent="Еще сыграем";
gameInfo0.addEventListener('click',this.listenInfo);
}

function span_atr(x){let a=(x==="attacker")?"Я хожу":(x==="defender")?"Я кроюсь":null;return a};
function tablE() {
	
    const items = [
      { id: 1, name: '',backgroundcolor: '#ffffff00' },
      {id: 2, name: 'G'},
      {id: 3, name: 'A'},
      {id: 4, name: 'M'},
      { id: 5, name: 'E' },
      { id: 6, name: '',backgroundcolor: '#ffffff00' },
        { id: 11, name: '',backgroundcolor: '#ffffff00' },
		 {id: 7, name: 'O'},
      {id: 8, name: 'V'},
	  {id: 9, name: 'E'},
        { id: 10, name: 'R' },
        { id: 12, name: '',backgroundcolor: '#ffffff00' },
        { id: 13, name: '',backgroundcolor: '#ffffff00' },
        { id: 14, name: '',backgroundcolor: '#ffffff00' },
        { id: 15, name: '',backgroundcolor: '#ffffff00' },
        { id: 16, name: '',backgroundcolor: '#ffffff00' },
        { id: 17, name: '',backgroundcolor: '#ffffff00' },
        { id: 18, name: '',backgroundcolor: '#ffffff00' },
    ];
let table_grid= document.querySelector(".table_gridstart");
table_grid.querySelectorAll("span").forEach((item,i)=>{item.textContent=items[i].name;
items[i].backgroundcolor?item.style.backgroundColor=items[i].backgroundcolor:item.style.backgroundColor='';
    item.classList.replace("g_g", "g_ns");
})
}

function tablE0() {
    const items = [0, 1, 2, 3, 4, 5, 6, 7];
    let table_grid = document.querySelector(".table_gridstart");
    table_grid.querySelectorAll("span").forEach((item, i) => {
        item.textContent = '';
       item.classList.replace("g_ns", "g_g");
    })
}		