/*const input=document.querySelector(".inp");
const btn=document.querySelector(".post");
const div1=document.querySelector(".other-tweets");
const hide=document.querySelector(".hide");
function addtodo(){
    const todo=input.value;
    const div=document.createElement("div");
    div.textContent=todo;
    div.classList.add("other-tweet");
    div1.appendChild(div);
}

function editToDo(){
    const todo=input.value;
    document.getElementById("heloo").innerHTML = todo;
    hide.classList.add("show");
}
//btn.addEventListener("click",addtodo);
btn.addEventListener("click",editToDo);*/





const input=document.querySelector(".inp");
const btn=document.querySelector(".post");
const div1=document.querySelector(".other-tweets");
const hide=document.querySelector(".hide");
const del=document.querySelector(".delete");
const d=document.querySelector(".del");

function addtodo(){
    const todo=input.value;
    const div=document.createElement("div");
    div.textContent=todo;
    div.classList.add("other-tweet");
    div1.appendChild(div);
}

function editToDo(){
    const todo=input.value;
    document.getElementById("heloo").innerHTML = todo;
    hide.classList.add("show");
}

function deleteToDo(){
   // d.classList.add("show");
    hide.classList.remove("show");
}
//btn.addEventListener("click",addtodo);
btn.addEventListener("click",editToDo);
d.addEventListener("click",deleteToDo);