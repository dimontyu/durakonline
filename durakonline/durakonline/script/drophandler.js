"use strict";

const target=document.querySelector("body > doom-arhitekt > div");
target.addEventListener("dragover", (event) => {
  // prevent default to allow drop
  event.preventDefault();
});
target.addEventListener("drop", dropHandler);


function dropHandler(ev) {
	//console.log(ev)
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const data = ev.dataTransfer.getData("text/html");
    //ev.target.appendChild(document.getElementById(data));
	if(document.getElementById(data)){
	document.getElementById(data).click();}
  }