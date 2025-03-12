'use strict'
const WebSocket=require('ws');

 
  module.exports=function(ws,userId,MSG,map){
    
   
     let client = map.get(MSG.id);
     let msg = JSON.stringify(MSG)
     if (client && client.readyState === WebSocket.OPEN) {
         MSG.id = userId
         client.send(msg.toString());
     }
     else if (!client) {
		 MSG.id = userId;
		 let msg = JSON.stringify(MSG)
         map.forEach(function each(client,id) {
          if (client !== ws && client.readyState === WebSocket.OPEN)  {
            client.send(msg.toString());
           }
     }); }
 }