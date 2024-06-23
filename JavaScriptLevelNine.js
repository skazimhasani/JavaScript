//Ans 1
let btn = document.createElement("button");
let inp = document.createElement("input");

btn.innerText="Click me";

document.querySelector("body").append(inp);
document.querySelector("body").append(btn);

//Ans 2
btn.setAttribute("id","btn");
inp.setAttribute("placeholder","username")

//Ans 3
let btn1 = document.querySelector("#btn");
btn1.classList.add("btnstyle")

//Ans 4
let h1=document.createElement("h1");
h1.innerHTML="<u>DOMPractice</u>";
document.querySelector("body").append(h1);

//Ans 5
let p1 = document.createElement("p");
p1.innerHTML = "Apna <b>College</b>";
document.querySelector("body").append(p1)