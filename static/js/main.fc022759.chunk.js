(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],[,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_HIBYfAeJ9138Rc2yZswvuBksucdhU_lmcxkaS_6fnctzC2jGw&s","name":"Superman"},{"id":2,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu20E_oqzJ6CHguDtXW3OlJeiuJF1M4Kb_07bxLNbW2CL03no06A&s","name":"Batman"},{"id":3,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTXWSAb4t3d0U7DlUrBbqVE_Q240pFkOLckAEub_SpmDKPXxp&s","name":"Ironman"},{"id":4,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHe12_IPd5nqjepVaI7Rpn8uLKrrfSa1XkmFy6jlejR96IYfp0&s","name":"Aquaman"},{"id":5,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt0EwdTHl_wV2kSofekGfbcIWBa1amtof0-qSTjqjKsECtrc8PLQ&s","name":"WonderWoman"},{"id":6,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa140vD9wS0Pp1XAY_xJv7-eD3bydAG-Fz4FxTDwDS-9jrDyBEWg&s","name":"BlackPanther"},{"id":7,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYiiqqseBeLD16TfwxNKlJ-YV4F5kLCv1SINUx92Hm2DCzTOD&s","name":"Spiderman"},{"id":8,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRMVTkIybaADlxpM0MSGRrT04A9mkF5Y7CluOSpY30wPuy69D&s","name":"BlackWidow"},{"id":9,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsWmH7NB6PLs7P87MiKAzJUcjtQnPISETDzRB060jfnB0hZV0i&s","name":"Hulk"},{"id":10,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRByw_Swdt8kL-AjDdIdvofRoOES7ybdCG__aOmqPrOxfK-z7_J&s","name":"Thor"},{"id":11,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYP2GkARg9ghTdt1HTp0PemdPBS5T2o2laJZsSf3bDhZbWIe3i&s","name":"Wolverine"},{"id":12,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAbLl_8_ui9v5v7NkP8PZMSQi4fP3VqTyCG1PtWSLa-7xlp-mkw&s","name":"DrStrange"}]')},,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(2),m=a.n(i),s=(a(10),a(4));a(11);var r=function(e){return c.a.createElement("div",{className:"card",onClick:e.handleClick},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.id,src:e.image})))};a(12);var l=function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark"},c.a.createElement("span",{className:"mb-0 h1"},c.a.createElement("h1",{id:"nav-text"}," ",c.a.createElement("strong",null," "))))};a(13);var d=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)};a(14);var o=function(e){return c.a.createElement("div",null,c.a.createElement("h4",{className:"title"},e.children))},g=a(3);var u=function(){var e=Object(n.useState)({images:g,clickedImages:[],score:0,message:""}),t=Object(s.a)(e,2),a=t[0],i=t[1];function m(e){var t=e.target.alt;a.clickedImages.indexOf(t)>-1?i({images:a.images.sort((function(e,t){return.5-Math.random()})),clickedImages:[],message:"Bummer, that was wrong!",score:0}):i({images:a.images.sort((function(e,t){return.5-Math.random()})),clickedImages:a.clickedImages.concat(t),score:a.score+1},(function(){12===a.score&&(alert(" You win!"),i({fish:a.images.sort((function(e,t){return.5-Math.random()})),clickedImages:[],message:"Super, you guessed correctly!",score:0}))}))}return c.a.createElement("div",null,c.a.createElement(l,null),c.a.createElement(d,null,c.a.createElement(o,null,c.a.createElement("div",{className:"text-center"},c.a.createElement("h1",{id:"message-title"},a.message," ")),c.a.createElement("div",{className:"gameScores text-center"},c.a.createElement("p",null,"Score : ",a.score," "),c.a.createElement("p",null,"The goal is to reach 12 points. Once you get to 12 points you win! Oh yeah dont click the same picture twice or you lose! Have fun!!"))),a.images.map((function(e){return c.a.createElement(r,{id:e.id,key:e.id,image:e.image,handleClick:m})}))))};m.a.render(c.a.createElement(u,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.fc022759.chunk.js.map