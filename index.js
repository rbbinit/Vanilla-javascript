const title= document.getElementById("title");
title.innerHTML= "hi i am hs";
title.style.color= 'red';
//js로 html을 조작할 수 있다.
const titles = document.querySelectorAll("#title");

function handleResize(event){
    console.log(event)
}

window.addEventListener("resize", handleResize);
//call function
console.log(title);

function handleClick(){
    title.style.color= "blue";
}
title.addEventListener("click", handleClick);