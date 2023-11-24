console.log(document.body);
console.log(document.head);
console.log(document.documentElement);

console.log(document.body.firstChild);
console.log(document.body.childNodes);
console.log(document.body.children);

console.log(document.getElementById("welcome"));

// class
const thisOne = document.getElementsByClassName("okay");
console.log(thisOne[0]);
console.log(thisOne[1]);

// tagname
const thistwo = document.getElementsByTagName("span");
console.log(thistwo);

// span tag update 

thistwo[0].innerText="hello";
thistwo[0].innerHTML=`<span class="myclass">Nice </span>`
console.log(thistwo[0]);

thistwo[0].style.backgroundColor="aqua";
// as it as kar sakete hai 

// id se update 
// const btn = document.getElementById("mybtn");
// btn.style.backgroundColor = "black";
// btn.style.color = "yellow";
// btn.style.cursor = "pointer";


// console.log(btn.getAttribute("class"));
// console.log(btn.setAttribute("class","hiclass"));


const btn = document.getElementById("mybtn");
const btns = document.querySelectorAll("button");

btn.onclick = call;
btns[1].onclick = dele;

// element create 
function call() {
    const h2 = document.createElement("h2");
    h2.innerText = "HARSHIT";
    document.body.append(h2);
}

function dele() {
    const h2 = document.querySelector("h2");
    if(h2){
        h2.remove();
    }
}



