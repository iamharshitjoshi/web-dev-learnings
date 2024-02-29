const heading = document.getElementById("heading");
const btn = document.getElementById("myBtn");
const box1 = document.getElementById("box1");
const input = document.querySelector("input");

btn.addEventListener("click", ()=>{
    box1.classList.add("classForDiv");
});

btn.addEventListener("contextmenu", (e)=>{
    btn.style.backgroundColor = "purple";
    // stop open right click inpect element wala part
    e.preventDefault();

    // remove event listener
    box1.removeEventListener("mouseover", func1);

});

function func1(){
    btn.style.transform = "scale(1.1)";
    heading.style.backgroundColor = "pink";
}

box1.addEventListener("mouseover", func1);

box1.addEventListener("mouseout", ()=>{
    btn.style.transform = "";
    heading.style.backgroundColor = "";
});

// box1.addEventListener("mouseover", ()=>{
//     btn.style.transform = "scale(1.1)";
//     heading.style.backgroundColor = "pink";
// });a



// har chiz window object ke andar hai 
// entire window means pura DOM
addEventListener("contextmenu", (e)=>{
    e.preventDefault();
    btn.style.filter = "blur(10px)";
});

// show mouse coordinate
addEventListener("click", (e)=>{
     console.log(e.clientX);
     console.log(e.clientY);
});


box1.addEventListener("dblclick", (e)=>{
   document.body.style.backgroundColor = "rgb(50, 50, 50)";
});

box1.addEventListener("click", (e)=>{
    document.body.style.backgroundColor = "#fff";
 });

input.addEventListener("change", (e)=>{
    console.log(e.target.value);
 });
 





